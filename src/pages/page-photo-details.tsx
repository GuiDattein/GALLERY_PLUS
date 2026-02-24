import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text>Detalhe da foto</Text>
      <br />
      <Text>ID da foto: {id}</Text>
    </>
  );
}
