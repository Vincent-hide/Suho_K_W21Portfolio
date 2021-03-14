import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import { data } from "./language.json";

// const toolTipContents = (label: string) => {
//   if (label === 'Page A') {
//     return 'Page A is about men\'s clothing';
//   } if (label === 'Page B') {
//     return 'Page B is about women\'s dress';
//   } if (label === 'Page C') {
//     return 'Page C is about women\'s bag';
//   } if (label === 'Page D') {
//     return 'Page D is about household goods';
//   } if (label === 'Page E') {
//     return 'Page E is about food';
//   } if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
// }

// type Props = {
//   payload: any,
//   label: string,
//   active: boolean
// }

// const CustomTooltip:React.FC<Props> = ({ payload, label, active }) => {
//   if (active) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{toolTipContents(label)}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// }

export const LangBarChart:React.FC = () => {
  return (
    <BarChart
      width={700}
      height={300}
      data={data}
      layout="vertical"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis type="number" hide={true} domain={[0, 100]} />
      <YAxis type="category" dataKey="name" />
      <CartesianGrid strokeDasharray="3 3" />
      {/* <Tooltip content={<CustomTooltip />}/> */}
      <Bar dataKey="exp" animationDuration={2000}>
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  );
}
