import React from 'react'
import { useState } from 'react'
import "./machine_status_style.css"

export default function MachineStatus() {
    const [IdealCurrent, setIdealCurrent] = useState("")
    const [IdealVoltage, setIdealVoltage] = useState("")
    const [IdealPowerFactor, setIdealPowerFactor] = useState("")
    const [IdealPower, setIdealPower] = useState("")
    const [IdealTemperature, setIdealTemperature] = useState("")
    const [IdealMaxTemperature, setIdealMaxTemperature] = useState("")
    const [InstantaneousCurrent, setInstantaneousCurrent] = useState("")
    const [InstantaneousVoltage, setInstantaneousVoltage] = useState("")
    const [InstantaneousPowerFactor, setInstantaneousPowerFactor] = useState("")
    const [InstantaneousPower, setInstantaneousPower] = useState("")
    const [InstantaneousTemperature, setInstantaneousTemperature] = useState("")
    const [InstantaneousMaxTemperature, setInstantaneousMaxTemperature] = useState("")

    const [Performance, setPerformance] = useState("")
    const [Fault, setFault] = useState("")
    const [Condition, setCondition] = useState("")

    const [Production, setProduction] = useState("")
    const [Consumption, setConsumption] = useState("")

    const [keyword, setkeyword] = useState("")

    const ExpandLess1 = () =>{
        document.getElementById("first_expand").style.visibility = "hidden"
        document.getElementById("first_expand").style.opacity = "0"        
        document.getElementById("machine1").style.height = "300px"
        document.getElementById("machine1").style.width = "300px"
        document.getElementById("m1_text").style.top = "270px"
        document.getElementById("machine1").style.marginRight = "0px"

    }

    const ExpandPop1 = () =>{
        setTimeout(() => {
                document.getElementById("first_expand").style.visibility = "visible"
                document.getElementById("first_expand").style.opacity = "1"
                document.getElementById("machine1").style.height = "650px"
                document.getElementById("machine1").style.width = "650px"
                document.getElementById("m1_text").style.top = "0px"
                document.getElementById("machine1").style.marginRight = "100px"


        }, 200);
    }
    const ExpandLess2 = () =>{
        document.getElementById("first_expand2").style.visibility = "hidden"
        document.getElementById("first_expand2").style.opacity = "0"        
        document.getElementById("machine2").style.height = "300px"
        document.getElementById("machine2").style.width = "300px"
        document.getElementById("m2_text").style.top = "270px"
        document.getElementById("machine2").style.marginRight = "0px"

    }

    const ExpandPop2 = () =>{
        setTimeout(() => {
                document.getElementById("first_expand2").style.visibility = "visible"
                document.getElementById("first_expand2").style.opacity = "1"
                document.getElementById("machine2").style.height = "650px"
                document.getElementById("machine2").style.width = "650px"
                document.getElementById("m2_text").style.top = "0px"
                document.getElementById("machine2").style.marginRight = "100px"


        }, 200);
    }
    const ExpandLess3 = () =>{
        document.getElementById("first_expand3").style.visibility = "hidden"
        document.getElementById("first_expand3").style.opacity = "0"        
        document.getElementById("machine3").style.height = "300px"
        document.getElementById("machine3").style.width = "300px"
        document.getElementById("m3_text").style.top = "270px"
        document.getElementById("machine3").style.marginLeft = "0px"

    }

    const ExpandPop3 = () =>{
        setTimeout(() => {
                document.getElementById("first_expand3").style.visibility = "visible"
                document.getElementById("first_expand3").style.opacity = "1"
                document.getElementById("machine3").style.height = "650px"
                document.getElementById("machine3").style.width = "650px"
                document.getElementById("m3_text").style.top = "0px"
                document.getElementById("machine3").style.marginLeft = "100px"


        }, 200);
    }
    const ExpandLess4 = () =>{
        document.getElementById("first_expand4").style.visibility = "hidden"
        document.getElementById("first_expand4").style.opacity = "0"        
        document.getElementById("machine4").style.height = "300px"
        document.getElementById("machine4").style.width = "300px"
        document.getElementById("m4_text").style.top = "270px"
        document.getElementById("machine4").style.marginRight = "0px"

    }

    const ExpandPop4 = () =>{
        setTimeout(() => {
                document.getElementById("first_expand4").style.visibility = "visible"
                document.getElementById("first_expand4").style.opacity = "1"
                document.getElementById("machine4").style.height = "650px"
                document.getElementById("machine4").style.width = "650px"
                document.getElementById("m4_text").style.top = "0px"
                document.getElementById("machine4").style.marginRight = "100px"


        }, 200);
    }

    const ExpandLess5 = () =>{
        document.getElementById("first_expand5").style.visibility = "hidden"
        document.getElementById("first_expand5").style.opacity = "0"        
        document.getElementById("machine5").style.height = "300px"
        document.getElementById("machine5").style.width = "300px"
        document.getElementById("m5_text").style.top = "270px"
        document.getElementById("machine5").style.marginRight = "0px"

    }

    const ExpandPop5 = () =>{
        setTimeout(() => {
            document.getElementById("first_expand5").style.visibility = "visible"
            document.getElementById("first_expand5").style.opacity = "1"
            document.getElementById("machine5").style.height = "650px"
            document.getElementById("machine5").style.width = "650px"
            document.getElementById("m5_text").style.top = "0px"
            document.getElementById("machine5").style.marginRight = "100px"
        }, 200);
    }

    const ExpandLess6 = () =>{
        document.getElementById("first_expand6").style.visibility = "hidden"
        document.getElementById("first_expand6").style.opacity = "0"        
        document.getElementById("machine6").style.height = "300px"
        document.getElementById("machine6").style.width = "300px"
        document.getElementById("m6_text").style.top = "270px"
        document.getElementById("machine6").style.marginRight = "0px"

    }

    const ExpandPop6 = () =>{
        setTimeout(() => {
            document.getElementById("first_expand6").style.visibility = "visible"
            document.getElementById("first_expand6").style.opacity = "1"
            document.getElementById("machine6").style.height = "650px"
            document.getElementById("machine6").style.width = "650px"
            document.getElementById("m6_text").style.top = "0px"
            document.getElementById("machine6").style.marginRight = "100px"
        }, 200);
    }
    const Search = ()=>{
        document.getElementById("icon_div").href.replace("", `#${keyword}`);

    }
  return (
    <div className='machine_status'>
        <div className="search">
            <input type="text" name="" id="searchbar" onChange={(event)=>{setkeyword(event.target.value)}}  placeholder='Search a machine'/>
            <a onClick={Search} href='' id="icon_div" className="icon_div">
                <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" alt="" className="search_icon" />
            </a>

        </div>

        <div className="label">
            <div className="normal"><div className="color" id="green"></div><p>NORMAL</p></div>
            <div className="normal"><div className="color" id="yellow"></div><p>SERVICE REQUIRED</p></div>
            <div className="normal"><div className="color" id="red"></div><p>FAULT</p></div>
        </div>
        <div className="machines_div">
            <div className="machines" id="machines">
                <div className="machine" onMouseLeave={ExpandLess1} onMouseEnter={ExpandPop1} id="machine1">
                <p id='m1_text'>M1</p>
                <div id="first_expand" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>

                <div className="machine" onMouseLeave={ExpandLess2} onMouseEnter={ExpandPop2} id="machine2">
                <p id='m2_text'>M2</p>
                <div id="first_expand2" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>
                
                <div className="machine" onMouseLeave={ExpandLess3} onMouseEnter={ExpandPop3} id="machine3">
                <p id='m3_text'>M3</p>
                <div id="first_expand3" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>

                <div className="machine" onMouseLeave={ExpandLess4} onMouseEnter={ExpandPop4} id="machine4">
                <p id='m4_text'>M4</p>
                <div id="first_expand4" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>
                <div className="machine" onMouseLeave={ExpandLess5} onMouseEnter={ExpandPop5} id="machine5">
                <p id='m5_text'>M5</p>
                <div id="first_expand5" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>
                <div className="machine" onMouseLeave={ExpandLess6} onMouseEnter={ExpandPop6} id="machine6">
                <p id='m6_text'>M6</p>
                <div id="first_expand6" className="first_expand">
            <div className="table_first_second">
                <div className="table1">
                    <h1 className="title_of_table">IDEAL DATA</h1>
                    <p className="table_question">Current : {IdealCurrent}</p>
                    <p className="table_question">Voltage : {IdealVoltage}</p>
                    <p className="table_question">Power Factor : {IdealPowerFactor}</p>
                    <p className="table_question">Power : {IdealPower}</p>
                    <p className="table_question">Temperature : {IdealTemperature}</p>
                    <p className="table_question">Max Temperature : {IdealMaxTemperature}</p>
                </div>
                <div className="table1">
                    <h1 className="title_of_table">INSTANTANEOUS DATA</h1>
                    <p className="table_question">Current : {InstantaneousCurrent}</p>
                    <p className="table_question">Voltage : {InstantaneousVoltage}</p>
                    <p className="table_question">Power Factor : {InstantaneousPowerFactor}</p>
                    <p className="table_question">Power : {InstantaneousPower}</p>
                    <p className="table_question">Temperature : {InstantaneousTemperature}</p>
                    <p className="table_question">Max Temperature : {InstantaneousMaxTemperature}</p>
                </div>
            </div>
            <div className="table_first_second">

            <div className="table_third">
            <p className="table_question">Performance : {Performance}</p>
                    <p className="table_question">Fault : {Fault}</p>
                    <p className="table_question">Condition : {Condition}</p>
            </div>
            <div className="table_third">
                <p className="table_question">Production at Various loads : {Production}</p>
                <p className="table_question">Energy Consumption at Various loads : {Consumption}</p>
            </div>
            </div>
        </div>                
                </div>
                
            </div>

        </div>
        
    </div>
  )
}
