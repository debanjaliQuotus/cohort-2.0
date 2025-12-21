let users = ["deba@gmail.com", "puja@gmail.com", "gita@gmail.com"];
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let timer = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (timer <= 5) {
        resolve("Email Sent....");
      } else reject("Email not sent....");
    }, timer * 1000);
  });
}

async function sendEmails(userlist) {
  let allResponses = userlist.map((email, idx) => {
    return sendEmail(email)
      .then((data) => {
        return {email,status:data};
      })
      .catch((err) => {
        return {email,status:err};
      });
  });
  let res = await Promise.all(allResponses);
  res.forEach((item) => {
    console.log(`${item.email}->${item.status}`);
  });
}

sendEmails(users);
