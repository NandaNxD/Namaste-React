const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl">Contact Us</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="Name"></input>
        <input type="text" className="border border-black p-2 m-2" placeholder="Message"></input>
        <button className="p-2 bg-green-300 rounded-lg" type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Contact;