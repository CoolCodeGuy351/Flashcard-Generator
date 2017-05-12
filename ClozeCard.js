var ClozeCard = function(fullText,cloze){
  this.fullText = fullText;
  this.cloze = cloze;
  this.partial = function(){
      var x = this.fullText.replace(this.cloze, ".....");
      return x;
    }
};

module.exports = ClozeCard;