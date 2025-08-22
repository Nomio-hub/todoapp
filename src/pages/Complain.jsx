import React, { useState  } from "react";
import { Chart } from "chart.js/auto";

const Complain = () => {
    const [isLoading, setLoading] = useState(false);
    const [isfinished, setfinishing] = useState(true);
    const [selectedItem, setSelectedItem] = useState("")
    const [text, setText] = useState("");
    const [list, setList] = useState([
        {
            "id": 123,
            "email": "tamir@gmail.com",
            "name": "Tamir Tsogbayar",
            "text": "Даланзадгад дахь Татварын хэлтэст очиход албан хаагч хүнтэйгээ ширүүн, дээрэнгүй харьцаж, асуултад бүрэн дүүрэн хариулаагүй. Харилцааны соёлд анхаарахыг хүсэж байна.",
        },
        {
            "id": 223,
            "email": "tamir@gmail.com",
            "name": "Bat Bold",
            "text": "Гурвантэс сумын төвөөс аймгийн төв рүү чиглэсэн авто зам маш их эвдэрсэн боловч олон сар өнгөрөхөд засагдаагүй хэвээр байна. Зам засварын ажлыг яаралтай эхлүүлэхийг хүсэж байна.",
        },
        {
            "id": 323,
            "email": "tamir@gmail.com",
            "name": "Tsogbayar D",
            "text": "Манай Ноён сумын эмнэлэгт түргэн тусламжийн машин эвдэрсэнээс болж өвчтэй ахмадыг төв рүү авч явахад хүндрэл гарлаа. Түргэн тусламжийн нөхцөлийг сайжруулахыг хүсэж байна.",
        },
        {
            "id": 423,
            "email": "zolbo@gmail.com",
            "name": "Zolboo Tsogbayar",
            "text": "Өмнөговь аймгийн Ханбогд суманд иргэний үнэмлэхээ сунгуулах гэж оролдсон ч тухайн суманд бүртгэлийн ажилтан тогтмол ажилладаггүй тул Даланзадгад руу явж байж л үйлчилгээ авч байна. Үүнийг шийдэж өгнө үү.",
        },
    ]);
    console.log(list);
    // useEffect(() => {
    //     const fetchList = async () => {
    //     const token = localStorage.getItem("token");
    //     const res = await fetch("http://localhost:8000/complain/list", {
    //         method: "POST",
    //         headers: {
    //         Authorization: `Bearer ${token}`,
    //         },
    //     });
    //     const data = await res.json();
    //     setList(data);
    //     };

    //     fetchList();
    // }, []);

    const handleStream = async (text) => {
        setText("");
        const token = localStorage.getItem("access_token"); // Replace with your token key

        const response = await fetch("http://localhost:8000/admin/complain/answer", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "query": selectedItem
            }),
        });
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        let result = "";
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            setText(prev => prev + chunk);
        }
        console.log("Final result:", result);
    };
    return (
        <div>
            <h2>Section title</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr className='highlight'>
                        <th className="col">#</th>
                        <th className="col">Email</th>
                        <th className="col">Нэр</th>
                        <th className="col">Асуудал</th>
                        <th className="col">Шийдвэрлэсэн эсэх</th>
                        <th className="col">Хариулт</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.name}</td>
                                        <td>{item.text}</td>
                                        <td>
                                            <span className="badge text-bg-warning">Хүлээгдэж байгаа</span>
                                        </td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="btn btn-primary btn-sm ms-2" 
                                                data-bs-toggle="modal" 
                                                data-bs-target={`#modal-${idx}`}
                                                onClick={() => {setSelectedItem(item.text)}}
                                            >
                                                Хариулах
                                            </button>

                                            <div className="modal fade" id={`modal-${idx}`} data-bs-backdrop="static" data-bs-keyboard="false" tabndex={idx} aria-labelledby={`modal-${idx}Label`} aria-hidden="true">
                                                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id={`modal-${idx}Label`}>Хүсэлтийн хариулт илгээх</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {setText("")}}></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="mb-3">
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                                        </div>
                                                        <button type="button" className="btn btn-success btn-sm ms-2 mt-2 center" onClick={() => {handleStream()}}>AI ашиглах</button>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {setText("")}}>Хаах</button>
                                                        <button type="button" className="btn btn-primary">Илгээх</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Complain;
