import React, { useState } from "react";
// cha(Main): studentList = {STUDENTS}, con: props = {studentList}
//c1
// const Body = (props) => {
//   return (
//     <ul>
//       <div>
//         {props.studentList.map((student, index) => {
//           return (
//             <li key={index} className="student">
//               <span>
//                 {student.name}--{student.age}
//               </span>
//             </li>
//           );
//         })}
//       </div>
//     </ul>
//   );
// };
//c2
const Body = ({ studentList }) => {
  return (
    <ul>
      <div>
        {studentList.map((student, index) => {
          return (
            <li key={index} className="student">
              <span>
                {student.name}--{student.age}
              </span>
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default Body;
