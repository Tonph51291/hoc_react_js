const Text = ({ content }) => {
  console.log(content);
  return <h1 style={{ color: '#333', textAlign: 'center' }}>{content}</h1>;
};

export default Text;
