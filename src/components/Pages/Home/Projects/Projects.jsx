import Example from "./Example/Example";
import styles from "./Projects.module.scss";
import furniture from "../../../../assets/example_img.jpg";
const Projects = () => {
  return (
    <div className={styles.projects_box}>
      <Example text={"Furniture"} icon={furniture}></Example>
      <Example text={"Furniture"} icon={furniture}></Example>
      <Example text={"Furniture"} icon={furniture}></Example>
    </div>
  );
};
export default Projects;
