import linkPreview from 'react-native-link-preview';

class Preview{
    constructor(){

    }
    static fetch(link){
       return linkPreview.getPreview(link).then(function(data){
        return data;
       });
    }
}

module.exports = Preview;