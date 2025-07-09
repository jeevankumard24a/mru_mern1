'use client'

import React , {useState,useEffect}from 'react';

export default function Home() {

  type deptTyp = {
    dept_id: number;
    dname: string;
    location: string;
  }


  const [data, setData] = useState<deptTyp[]>([]);

  const fetchData=async()=>{

    const response = await fetch('http://localhost:5000/deptselect');
    const result = await response.json();
    setData(result);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
      <div className={`flex flex-col  w-full h-screen   justify-center  items-center`}>

        <div>
          {JSON.stringify(data)}
        </div>
        <div>
          <table className="table-auto text-black border-collapse border border-gray-300">
            <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 px-4 py-2">Dept No</th>
              <th className="border border-gray-300 px-4 py-2">Dept Name</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
            </thead>
            <tbody>
            {data.map((dept, index) => (

                <tr key={index} className="hover:bg-blue-100">
                  <td className="border border-gray-300 text-slate-100 px-4 py-2">{dept.dept_id}</td>
                  <td className="border border-gray-300 px-4 py-2 text-slate-100  ">{dept.dname} Hellooooo</td>
                  <td className="border border-gray-300 px-4 py-2">{dept.location}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>


      </div>


  );
}
