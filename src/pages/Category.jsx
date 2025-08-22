import React, { useState } from "react";

const Category = () => {
    const [text, setText] = useState("");

    return <div className='content px-3 py-4'>
        <h3 className="fw-bold fs-4 mb-3">
            Байгууллагын төрөл нэмэх
        </h3>
        <div className="row">
            <div className="col-6 cal-md-6">
                <form action="">
                    <div class="mb-3">
                        <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Байгууллагын төрөл" 
                        aria-label="default input example"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"> Дэлгэрэнгүй </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                </form>
            </div>
            <div className="col-6 cal-md-6">
                <table className="table table-striped">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Нэр
                        </th>
                        <th>
                            Дэлгэрэнгүй
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
}

export default Category;