import React from 'react'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import Gallery from '../components/Gallery/Gallery'

class Photos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    }

    render () {
        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    
                    overflow: "auto"}}>
                <Gallery
            images={this.state.images}
            onSelectImage={this.onSelectImage}
            lightboxWidth={1536}
                />
                </div>
        );
    }
}

Photos.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

Photos.defaultProps = {
    images: [
        {
            src: "/Gallery/1.jpg",
            thumbnail: "/Gallery/1_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 1"
        },
        {
            src: "/Gallery/2.jpg",
            thumbnail: "/Gallery/2_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 2"
        },
        {
            src: "/Gallery/3.jpg",
            thumbnail: "/Gallery/3_result.jpg",
            thumbnailWidth: 135,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 3"
        },
        {
            src: "/Gallery/4.jpg",
            thumbnail: "/Gallery/4_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            isSelected: true,
            caption: "Shungit presentation photo 4"
        },
        {
            src: "/Gallery/5.jpg",
            thumbnail: "/Gallery/5_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 5"
        },
        {
            src: "/Gallery/6.jpg",
            thumbnail: "/Gallery/6_result.jpg",
            thumbnailWidth: 266,
            thumbnailHeight: 180,
            isSelected: true,
            caption: "Shungit presentation photo 6"
        },
        {
            src: "/Gallery/7.jpg",
            thumbnail: "/Gallery/7_result.jpg",
            thumbnailWidth: 135,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 7"
        },
        {
            src: "/Gallery/8.jpg",
            thumbnail: "/Gallery/8_result.jpg",
            thumbnailWidth: 135,
            thumbnailHeight: 180,
            isSelected: true,
            caption: "Shungit presentation photo 8"
        },
        {
            src: "/Gallery/9.jpg",
            thumbnail: "/Gallery/9_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 9"
        },
        {
            src: "/Gallery/10.jpg",
            thumbnail: "/Gallery/10_result.jpg",
            thumbnailWidth: 135,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 10"
        },
        {
            src: "/Gallery/11.jpg",
            thumbnail: "/Gallery/11_result.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 11"
        },
        {
            src: "/Gallery/12.jpg",
            thumbnail: "/Gallery/12_result.jpg",
            thumbnailWidth: 270,
            thumbnailHeight: 180,
            caption: "Shungit presentation photo 12"
        }
    ]
};

export default function Page() {
  return (
    <>
	<h1>Gallery of Shungit crafts</h1>
	<div id="Photos"><Photos /></div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}