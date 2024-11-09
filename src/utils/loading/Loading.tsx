import './Loading.scss';

const Loading = () => (
  <div className="loading-container">
    <div className="earth-container">
      <div className="earth"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
    </div>
    <p className="loading-text">Preparing Your Journey...</p>
  </div>
);

export default Loading;
