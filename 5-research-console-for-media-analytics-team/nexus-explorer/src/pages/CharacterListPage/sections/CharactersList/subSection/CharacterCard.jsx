import { Link } from "react-router-dom";
import Card from "../../../../../components/ui/Card";
import Image from "../../../../../components/ui/Image";
import Badge from "../../../../../components/ui/Badge";
import CharacterIcon from "../../../../../asset/statCardIcons/characters.png";

export default function CharacterCard() {
  return (
    <Card className="characterCard">
      <div className="imageContainer">
        <Image src={CharacterIcon} alt="Character Image" height="132" />
        <Badge className="watchlistBadge" badgeName="★" />
      </div>
      <p className="cardHeader">Rick Sanchez</p>
      <Badge className="headerSubtitle" badgeName="Human • Male • C-137" />
      <div className="cardBottom">
        <Badge className="characterStatus" badgeName="Alive" />
        <Link className="detailLink">Details →</Link>
      </div>
    </Card>
  );
}
