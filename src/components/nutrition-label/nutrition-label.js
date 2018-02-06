import React from 'react'
import './nutrition-label.scss'

export default class NutritionLabel extends React.Component{
    render() {
        return(
            <div className='nutrition-facts-label'>
                <div className='nutrition-facts-title'>                                                                                         '>
                    Nutrition Facts
                </div>
                <div className='nutrition-facts-servings'>

                </div>
                <span className='nutrition-facts-serving-size'>

                </span>
                <div className='nutrition-facts-line'>

                </div>
                <span className='nutrition-facts-'>

                </span>
                <span>

                </span>
            </div>
        )
    }
}