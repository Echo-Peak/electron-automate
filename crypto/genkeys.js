let path = require('path');
let fs = require('fs');
let crypto = require('crypto');
let mkdirp = require('mkdirp');
let events = require('events');

class emmiter extends events {}
let _emmiter = new emmiter();
class keyGen{
  constructor(args){

    this.id = null;
    this.out = path.resolve(__dirname);
    this.keyLength = 128;
    this.mod = 60;
    if(~args.indexOf('--id')){
      this.id = args[args.indexOf('--id')+1];
    }

    if(~args.indexOf('--out')){

      this.out = path.resolve(args[args.indexOf('--out')+1]);
    }

    if(~args.indexOf('--length')){
      this.keyLength = args[args.indexOf('--length')+1];
    }

    this.checkDir();
  ~args.indexOf('--id') && ~args.indexOf('create') && this.create();
  ~args.indexOf('test') && this.test();
  }
  createCipher(cipher ,plaintext ,type){

        let encrypted = '';
     cipher.on('readable', () => {
       var data = cipher.read();

         data && (encrypted += data.toString('hex'));
     });
     cipher.on('end', () => {

       fs.writeFile(`${this.out}/${this.id}/${type}.txt` , encrypted ,function(err){

       });

     });

     cipher.write(plaintext);
     cipher.end();
  }
  checkDir(){

    if (!fs.existsSync(`${this.out}/${this.id}`)){
        mkdirp.sync(`${this.out}/${this.id}`)
    }
  }

  create(){
    let secret = this.randomBytes();
    let plaintext = this.randomBytes();
    let seed = this.randomBytes();
    //fs.writeFile(`${this.out}/${this.id}/seed.txt` ,seed , function(){});
    fs.writeFile(`${this.out}/${this.id}/secret.txt` ,secret , function(){});

    if(~process.argv.indexOf('--self')){
    _emmiter.emit('seed' ,seed);
    }else{
      fs.writeFile(`${this.out}/${this.id}/seed.txt` ,plaintext , function(){});
    }


    const cipherFinal = crypto.createCipher('aes192', secret);

    this.createCipher(cipherFinal ,plaintext ,'key');


  }

  randomBytes(){
    return crypto.randomBytes(parseInt(this.keyLength)).toString('hex');
  }
  test(){
    let sec = fs.readFileSync(`${this.out}/${this.id}/secret.txt`).toString();
    let plaintext = fs.readFileSync(`${this.out}/${this.id}/key.txt`).toString();
    const decipher = crypto.createDecipher('aes192',sec );
     var decrypted1 = '';
     decipher.on('readable', () => {
       var data = decipher.read();
       if (data)
         decrypted1 += data.toString('utf8');
     });
     decipher.on('end', () => {
       console.log(decrypted1);
       // Prints: some clear text data
     });


     decipher.write(plaintext, 'hex');
     decipher.end();
  }
}

if(~process.argv.indexOf('--self')){
  module.exports = {keyGen , emmiter:_emmiter}
}else{

  module.exports = new keyGen(process.argv.splice(2));
}

//cmd generate-keys.js
//--id some-id
//--out .
//--length 256

//create seed file that a key and a secret decrptys
//create a seed file
//use seed file as plaintext to be encrptyed
//

//1024 -> 487
//1024 -> 510 579
//512 -> 510 579
//246 -> 510 348
//64 -> 510 156
