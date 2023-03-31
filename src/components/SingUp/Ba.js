const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const data = new FormData();

  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("subject", formData.subject);
  data.append("message", formData.message);

  fetch("/send-mail.php", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      response.text();
    })
    .then((data) => {
    })
    .catch((error) => {
      console.log(error);
    });
};