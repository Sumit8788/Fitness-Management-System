import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EndDate from './EndDate'
import { API_URL } from '../common/URL'

const MyPlan = () => {
    const [user_id, setIsUser] = useState('')
    const [plan_id, setPlanID] = useState('')
    const [userplans, setUserPlans] = useState([])
    const [userplansGET, setUserPlansGET] = useState([])

    var ID = localStorage.getItem("id")

    useEffect(() => {
        setIsUser(localStorage.getItem("id"))
        console.log("User ID = " + ID);
        console.log("Plan ID = " + plan_id);
        axios.get(`${API_URL}getUserPlans/${ID}`)
            .then((response) => {
                console.log(response.data.data)
                setUserPlans(response.data.data)
                //setIsUser(response.data.data.user_id)
                setPlanID(response.data.data.id)
            })
            console.log("User ID = " + ID);
        console.log("Plan ID = " + plan_id);
        // axios.post(API_URL + "endDate", {
        //     userId: ID,
        //     planId: plan_id
        // })
        //     .then((response) => {
        //         console.log(response.data.data)
        //         setUserPlansGET(response.data.data)
        //     })
    }, [])
    return (
        <React.Fragment>
            <h1>My Plans</h1>
            <hr />
            <div className='profilecardcontainer'>
                {userplans.map((val) => {
                    return <div key={val.planId} className="card profilecard1">
                        <div className="card-header outercard">
                            <h4 className='text-success'>{val.membershipPlanName}</h4>
                        </div>
                        <div className="card-body plancardbody">
                            <div className='row'>
                                <div className='col'>
                                    <label><b>Duration</b></label>
                                    <p>{val.duration} days</p>
                                </div>

                                <div className='col'>
                                    <label><b>Price</b></label>
                                    <p>{val.price} ₹</p>
                                </div>

                                <div className='col'>
                                    <label><b>Trainer name</b></label>
                                    <p>{val.trainerName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted outercard">
                            <p className='text-danger'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-speedometer2" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                            </svg>  Valid Till <EndDate duration={val.duration} planID={val.id}></EndDate></p>
                        </div>
                    </div>
                })}
            </div>
        </React.Fragment>
    )
}

export default MyPlan;