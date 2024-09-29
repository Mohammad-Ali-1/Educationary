import React from 'react'
import './Programs.css'
import porgram_1 from '../../assets/program-1.png'
import porgram_2 from '../../assets/program-2.png'
import porgram_3 from '../../assets/program-3.png'
import porgram_icon_1 from '../../assets/program-icon-1.png'
import porgram_icon_2 from '../../assets/program-icon-2.png'
import porgram_icon_3 from '../../assets/program-icon-3.png'
export const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={porgram_1} alt="" />
                <div className="caption">
                    <img src={porgram_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={porgram_2} alt="" />
                <div className="caption">
                    <img src={porgram_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={porgram_3} alt="" />
                <div className="caption">
                    <img src={porgram_icon_3} alt="" />
                    <p>Post Degree</p>
                </div>
            </div>
        </div>
    )
}
