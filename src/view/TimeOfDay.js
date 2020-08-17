import React, { Component } from 'react'
import '../assets/sass/bookstore.scss';

    function TimeOfDay() {
   
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if(hours < 12){
            timeOfDay = "morning";
        }
        else if(hours >= 12 && hours < 17) {
            timeOfDay ="after noon"
        }
        else{
            timeOfDay ="night"
        }
        return (
            <div className="wrapper">
                <h1>Good {timeOfDay}</h1>
            </div>
        )
}
export default TimeOfDay
