import { useAreaContext } from "../../context/AreaContext";

const Header = () => {
  const { areas, selectedArea, setSelectedArea } = useAreaContext();

  const handleChange = (e) => {
    const selected = areas.filter((area) => area.id === e.target.value)[0];
    setSelectedArea(selected);
  };

  return (
    <header>
      <h1>{selectedArea.name}の天気</h1>
      <select onChange={handleChange} defaultValue={selectedArea.id}>
        {areas.map((area) => (
          <option key={area.id} value={area.id}>
            {area.name}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
