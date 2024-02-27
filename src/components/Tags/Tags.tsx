import styles from "./Tags.module.css";

interface TagsProps {
  tagList: string[];
}

const Tags = ({ tagList }: TagsProps) => {
  return (
    <section className={styles.tagsContainer}>
      {tagList.map((tag) => (
        <div className={styles.singleTagContainer}>{tag}</div>
      ))}
    </section>
  );
};

export default Tags;
