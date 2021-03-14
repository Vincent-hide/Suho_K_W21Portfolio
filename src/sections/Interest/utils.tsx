import { interests } from "./interest.json";

import DvrIcon from "@material-ui/icons/Dvr";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import AlbumIcon from "@material-ui/icons/Album";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export default {
  // interstHelper: () => {
    
  //   // equivalent to zip function in python
  //   const zip = (rows: Array<any>) =>
  //     rows[0].map((_: any, c: any) => rows.map((row: Array<any>) => row[c]));

  //   return zip([interests, icons]);
  // },

  iconSwitch: (id: number) => {
    switch (id) {
      case 1:
        return <DvrIcon style={{ color: "#999999" }}/>;
  
      case 2:
        return <SportsBasketballIcon style={{ color: "#fc7f03" }}/>;
  
      case 3:
        return <AlbumIcon style={{ color: "#000" }} />;
  
      default:
        return <AcUnitIcon style={{ color: "#4da6ff" }} />;
    }
  }
};
