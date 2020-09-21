import romanizer  from 'romanize';
function transform(value){
 return "X";
}
const transformByromanizer = (number) => {
          return romanizer(number);
      };

export {
    transform, transformByromanizer
};