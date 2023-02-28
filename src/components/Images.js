import ImageItem from "./ImageItem";

function Images ({imageList}) {
    return ( 
    <div className="imageList">
        {
            imageList.map((image, index)=>{
              return <ImageItem key ={index} image = {image} />
            })
        }
    </div> );
}

export default Images;

