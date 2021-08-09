import React, { Component } from 'react';
import Navbar from './Navbar';
import bodyBackground from '../media/background.jpg';
import StoreIcon from '@material-ui/icons/Store';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Hours from './Hours';




export default class Body extends Component {

    
    render() {
        function inventoryLink(){
            
            window.open("https://www.doitbest.com/");
        }
        return (
            <div>
                <Navbar />
                <div className="bodyBackground">
                    <div className="bodyBackgroundBlur"><img className="bodyBackgroundImg" src={bodyBackground}></img></div>

                    <p className="bodyTitle">Since 1956.</p>
                </div>

                <div className="bottomBody">
                    <div className="inventoryButton">
                        <Button onClick={inventoryLink} endIcon={<StoreIcon />}>
                            View our inventory
                        </Button>
                        
                    </div>
                    <div className="location">
                        <p>6600 Teays Valley Road, Scott Depot, WV 25560</p>
                    </div>
                    <div className="hours">
                        <Hours />
                    </div>
                    <div className="description">
                        <p>Teays Valley Hardware, Inc. Provides Hardware and Tools, Plumbing, Electrical Floor Coverings, Buildings Supplies, Paint/Painting Supplies And Lawn and Garden To The Scott Depot, WV Area.</p>
                    </div>
                </div>
            </div>
        )
    }
}
