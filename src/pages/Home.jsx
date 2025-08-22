import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["AI", "Мэргэжилтэн", "Хэлээгдэж буй"],
        datasets: [
          {
            label: "# of Votes",
            data: [1271, 580, 30],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Иргэдээс ирсэн өргөдөл, гомдлыг шийвдэрлэсэн байдал'
        }
      },
    });

    return () => {
      chart.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div className='content px-3 py-4'>
    <div className='container-fluid'>
      <h3 className="fw-bold fs-4 mb-3">
        Удирдлагын хэсэг
      </h3>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card shadow admin-card">
            <div className="card-body py-4">
              <h6 className="mb-2 fw-bold">
                Хэрэглэгч
              </h6>
              <p className='fw-bold mb-2'>
                32,698
              </p>
              <div className="mb-0">
                <span className='badge text-success'> +3.9% </span>
                <span className='fw-bold'> Нийт Хэрэглэгч </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow admin-card">
            <div className="card-body py-4">
              <h6 className="mb-2 fw-bold">
                Өргөдөл, Гомдол
              </h6>
              <p className='fw-bold mb-2'>
                106,698
              </p>
              <div className="mb-0">
                <span className='badge text-success'> +15.7% </span>
                <span className='fw-bold'> Сүүлийн сар хүлээн авсан нийт өргөдөл, гомдол </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card shadow admin-card">
            <div className="card-body py-4">
              <h6 className="mb-2 fw-bold">
                Нийт хандалт
              </h6>
              <p className='fw-bold mb-2'>
                329,698
              </p>
              <div className="mb-0">
                <span className='badge text-success'> +9.0% </span>
                <span className='fw-bold'> Сүүлийн нэг сарын нийт хандалтын тоо </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-7">
          <h3 className="fw-bold fs-7 my-3">Сүүлд хүлээн авсан өргөдөл, гомдол</h3>
          <table className='table table-striped'>
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
              <tr>
                <td>1</td>
                <td>tamiraatsogbayar@gmail.com</td>
                <td>Tamir Tsogbayar</td>
                <td>Asuudal mash udaan shiidverlej bn</td>
                <td>
                  <span className="badge text-bg-primary">Мэргэжилтэн хариулсан</span>
                </td>
                <td>
                  Сайн байна уу?
                  Бид таны хүсэлтийг хүлээн авч зохих мэргэжилтэн хүргэсэний дагуу асуудалыг шийдвэрлэлээ
                  ...
                  Танд баярлалаа!
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>tamiraatsogbayar@gmail.com</td>
                <td>Tamir Tsogbayar</td>
                <td>Asuudal mash udaan shiidverlej bn</td>
                <td>
                  <span className="badge text-bg-success">AI хариулсан</span>
                </td>
                <td>
                  Сайн байна уу?
                  Бид таны хүсэлтийг хүлээн авч зохих мэргэжилтэн хүргэсэний дагуу асуудалыг шийдвэрлэлээ
                  ...
                  Танд баярлалаа!
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>tamiraatsogbayar@gmail.com</td>
                <td>Tamir Tsogbayar</td>
                <td>Asuudal mash udaan shiidverlej bn</td>
                <td>
                  <span className="badge text-bg-warning">Хүлээгдэж байгаа</span>
                </td>
                <td>
                  Сайн байна уу?
                  Бид таны хүсэлтийг хүлээн авч зохих мэргэжилтэн хүргэсэний дагуу асуудалыг шийдвэрлэлээ
                  ...
                  Танд баярлалаа!
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>tamiraatsogbayar@gmail.com</td>
                <td>Tamir Tsogbayar</td>
                <td>Asuudal mash udaan shiidverlej bn</td>
                <td>
                  <span className="badge text-bg-warning">Хүлээгдэж байгаа</span>
                </td>
                <td>
                  Сайн байна уу?
                  Бид таны хүсэлтийг хүлээн авч зохих мэргэжилтэн хүргэсэний дагуу асуудалыг шийдвэрлэлээ
                  ...
                  Танд баярлалаа!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12 col-md-5">
          <h3 className="fw-bold fs-7 my-3"> Хүсэлт шийдвэрлэсэн байдал </h3>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;