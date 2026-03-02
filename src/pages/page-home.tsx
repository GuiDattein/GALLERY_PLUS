import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter albums={[]} className="mb-9" />
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
