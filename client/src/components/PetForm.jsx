import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PetForm = () => {
    const [petname1, setName] = useState("");
    const [pettype, setType] = useState("");
    const [petdescription, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [add, setAdd] = useState("");

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/crearpets", {
                petname1,
                pettype,
                petdescription,
                skill1,
                skill2,
                skill3,
                add,
            })
            .then((res) => {
                console.log(res, "LLega por THEN");
                navigate("/todospet");
            })
            .catch((err) => {
                console.log(err, "LLEGA POR CATCH");
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <Navbar />
            <div className="col-6 mx-auto">
                <h2> Know a pet needing a home? </h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="" className="form-label">
                        Pet Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.title ? (
                        <span className="text-danger"> {errors.petname1.message}</span>
                    ) : null}
                    <br></br>
                    <label htmlFor="" className="form-label">
                        Pet Type
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setType(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">{errors.pettype.message} </span>
                    ) : null}{" "}
                    <br />
                    <label htmlFor="" className="form-label">
                        Pet Description{" "}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">
                            {errors.petdescription.message}{" "}
                        </span>
                    ) : null}{" "}
                    <br />
                    <label htmlFor="" className="form-label">
                        Skill 1{" "}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSkill1(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">{errors.skill1.message} </span>
                    ) : null}{" "}
                    <br />
                    <label htmlFor="" className="form-label">
                        Skill 2{" "}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSkill2(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">{errors.skill2.message} </span>
                    ) : null}{" "}
                    <br />
                    <label htmlFor="" className="form-label">
                        Skill 3{" "}
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSkill3(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">{errors.skill3.message} </span>
                    ) : null}{" "}
                    <br />
                    <label htmlFor="" className="form-label">
                        Add Image Pet URL
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAdd(e.target.value)}
                    />
                    {errors.creador ? (
                        <span className="text-danger">{errors.add.message} </span>
                    ) : null}{" "}
                    <br />
                    <button className="btn btn-outline-primary"> Add Pett</button>
                </form>
            </div>
        </div>
    );
};

export default PetForm;
