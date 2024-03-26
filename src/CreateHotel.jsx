import React from 'react'

function CreateHotel() {
  return (
    <div className="container">
        <div className="row">
            <h1>Create hotel</h1>
            <div className="col-lg-12">
                <form action="">
                    <input type="text" placeholder="Hotel Name" className="form-control mt-2" />
                    <input type="text" placeholder="Location" className="form-control mt-2" />
                    <input type="text" placeholder="Image" className="form-control mt-2" />
                    <textarea placeholder="Description" className="form-control mt-2" name="" id="" cols="30" rows="10"></textarea>
                    <h3>Menu</h3>
                    <h4>Food 1</h4>
                    <input type="text" placeholder="Food Name" className="form-control mt-2" />
                    <input type="text" placeholder="Price" className="form-control mt-2" />
                    <input type="text" placeholder="Image" className="form-control mt-2" />
                    <textarea placeholder="Description" className="form-control mt-2" name="" id="" cols="30" rows="3"></textarea>
                    <h4>Food 2</h4>
                    <input type="text" placeholder="Food Name" className="form-control mt-2" />
                    <input type="text" placeholder="Price" className="form-control mt-2" />
                    <input type="text" placeholder="Image" className="form-control mt-2" />
                    <textarea placeholder="Description" className="form-control mt-2" name="" id="" cols="30" rows="3"></textarea>
                    <h4>Food 3</h4>
                    <input type="text" placeholder="Food Name" className="form-control mt-2" />
                    <input type="text" placeholder="Price" className="form-control mt-2" />
                    <input type="text" placeholder="Image" className="form-control mt-2" />
                    <textarea placeholder="Description" className="form-control mt-2" name="" id="" cols="30" rows="3"></textarea>
                    <h4>Food 4</h4>
                    <input type="text" placeholder="Food Name" className="form-control mt-2" />
                    <input type="text" placeholder="Price" className="form-control mt-2" />
                    <input type="text" placeholder="Image" className="form-control mt-2" />
                    <textarea placeholder="Description" className="form-control mt-2" name="" id="" cols="30" rows="3"></textarea>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateHotel