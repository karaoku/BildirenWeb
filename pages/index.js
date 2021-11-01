import Post from '../components/post'

function HomePage() {
    return (
        <div className="flex flex-col space-y-12">
            <Post />
            <Post />
        </div>
    )
}
  
  export default HomePage