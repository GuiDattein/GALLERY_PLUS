import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <PhotosList
        photos={[
          {
            id: "123",
            title: "teste",
            imageId: "portrait-tower.png",
            albums: [
              { id: "321", title: "Ablum 1" },
              { id: "432", title: "Ablum 2" },
              { id: "643", title: "Ablum 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
