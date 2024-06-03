export function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const dataToSubmit = { name, email, phone, message };

    console.log(dataToSubmit);

    try {
      const response = await fetch(import.meta.env.API_URL_TWI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} id="contact-form" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
