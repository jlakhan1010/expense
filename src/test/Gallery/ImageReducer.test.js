
import imagesReducer from '../../Gallery/ImagesReducer';

describe('Image Reducer at initial ' , () => {
    it('Should return initial state' , () => {
        
        expect(imagesReducer(undefined,{})).toEqual([]);
    });
    
});

describe('Image Reducer ADD DELETE ' , () => {
    
    it('Should return new state after adding given imagee ADD ' , () => {
       const image= {link: "https://s3.amazonaws.com/meshup-dev-assets/kitty-551554__340.jpg"};
        const newState = imagesReducer( undefined , {
                type:"ADD_IMAGE",
                payload: image
        });
        expect(newState).toEqual([image])
    });
    
    it('Should return new state after deleting given imagee. DELETE ' , () => {
        const state=[
                        {link: "https://s3.amazonaws.com/meshup-dev-assets/amurtiger-1975790__340.jpg"},
                        {link: "https://s3.amazonaws.com/meshup-dev-assets/images (1).jpg"}
                    ];
        const image= {link: "https://s3.amazonaws.com/meshup-dev-assets/images (1).jpg"};
        const expectedState=[
                                {link: "https://s3.amazonaws.com/meshup-dev-assets/amurtiger-1975790__340.jpg"},         
                            ];
         const newState = imagesReducer( state , {
                 type:"DELETE_IMAGE",
                 payload: image["link"]
         });
         expect(newState).toEqual(expectedState);
     });
     
});


/*
[
    {link: "https://s3.amazonaws.com/meshup-dev-assets/amurtiger-1975790__340.jpg"},
    {link: "https://s3.amazonaws.com/meshup-dev-assets/cat-2083492__340.jpg"},
    {link: "https://s3.amazonaws.com/meshup-dev-assets/images (1).jpg"}
]



{link: "https://s3.amazonaws.com/meshup-dev-assets/kitty-551554__340.jpg"}
*/