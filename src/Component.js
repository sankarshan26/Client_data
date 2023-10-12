import Axios from "axios";
import { useEffect, useState } from "react";
function Component() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          //check for successfull fetching.
          console.log(res.data.users);
          setData(res.data.users);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []); // empty list avoids the re-rendering

  const Fill_Data = () => {
    return data.map((val) => {
      return (
        <>
          <p></p>
          <tr>
            <td style={{"text-align":"center"}}><img src={val.image} alt="image_not_loaded" width="50px" height="50px"/></td>
            <td style={{"text-align":"center"}}>{val.firstName}</td>
            <td style={{"text-align":"center"}}>{val.lastName}</td>
            <td style={{"text-align":"center"}}>{val.gender}</td>
            <td style={{"text-align":"center"}}>{val.email}</td>
            <td style={{"text-align":"center"}}>{val.username}</td>
            <td style={{"text-align":"center"}}>{val.domain}</td>
            <td style={{"text-align":"center"}}>{val.ip}</td>
            <td style={{"text-align":"center"}}>{val.university}</td>
          </tr>
        </>
      );
    });
  };
  return (
    <div style={{"overflow-x":"auto"}}>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col" style={{"white-space":"nowrap","text-align":"center"}}>Profile Pic</th>
            <th scope="col" style={{"white-space":"nowrap","text-align":"center"}}>First Name</th>
            <th scope="col" style={{"white-space":"nowrap","text-align":"center"}}>Last Name</th>
            <th scope="col" style={{"text-align":"center"}}>Gender</th>
            <th scope="col" style={{"text-align":"center"}}>Email</th>
            <th scope="col" style={{"text-align":"center"}}>Username</th>
            <th scope="col" style={{"text-align":"center"}}>Domain</th>
            <th scope="col" style={{"text-align":"center"}}>IP</th>
            <th scope="col" style={{"text-align":"center"}}>University</th>
          </tr>
        </thead>
        <tbody>{Fill_Data()}</tbody>
      </table>
    </div>
  );
}

export default Component;