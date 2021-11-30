import { useMovies } from "./MovieContext";
import { Button } from "./Button";
import "../styles/sidebar.scss";
export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useMovies();
  console.log(selectedGenreId);

  return (
    <>
      <div style={{ display: "flex" }}>
        <nav className="sidebar">
          <span>
            Watch<p>Me</p> 💻
          </span>

          <div className="buttons-container">
            {genres.map((genre) => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
