import React from 'react';

import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { displayImages , addImage, deleteImage } from '../Gallery/GalleryAction';

class Gallery extends React.Component
{  
    constructor (props){
        super(props);
        this.props.dispatch(displayImages());   
    }
    state={
        selectedFile:null
    }
    fileSelectedHandler = event =>{
        this.setState({
            selectedFile:event.target.files[0]
        })
        
    }
    uploadHandler = () =>{
        const fd= new FormData();
        fd.append('file', this.state.selectedFile,  this.state.selectedFile.name);

        this.props.dispatch(addImage(fd, this.props.history));

    }
    handleDelete = (imgLink) =>{
        console.log("check");
        this.props.dispatch(deleteImage(imgLink));
    }
    imageList = () => {
        const { images } = this.props;
       return(
            images?<div className="row">
         
                
                { 
                    images.map((i)=>( 
                        <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-12"> 
                            <div className="image-container">
                                <a 
                                    href={i.link}
                                    data-lightbox="portfolio" 
                                    data-title="App 1" 
                                    className="link-preview" 
                                    title="Preview"
                                >
                                <img className="img-fluid img-gallery" key={i.link} src={i.link} /> 
                                </a>
                                
                                <button className="m-auto d-block" onClick={()=>this.props.dispatch(deleteImage(i.link))}>
                                    Delete Image
                                </button> 
                            </div>
                        </div>
                    ))
                }
            </div> : <div></div>    
        );

    }
    render()
    {
        const { handleSubmit } = this.props;
        return(
            <div className="ui container grid">
                <ToastContainer />
                <div className="ui row">
                    <div >
                        <h3>Gallery</h3>
                    </div>   
                </div>
                <div className="ui row">
                    <div >
                        <div>
                            <input type="file" onChange={this.fileSelectedHandler } />
                            <button onClick={this.uploadHandler} > Upload </button>
                        </div>
                    </div>
                </div>
                <div >
                        {
                            this.imageList()
                        }
                </div>
        </div>          
        );
    }
}


const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        images:state.imagesr
    };
  };

  
  Gallery = connect(mapStateToProps )(Gallery);


export default Gallery;

