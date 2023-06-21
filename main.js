        function handleCredentialResponse(response) {
          const data = jwt_decode(response.credential)
          console.log(data)

          fullName.textContent = data.name
          sub.textContent = data.sub
          given_name.textContent = data.given_name
          family_name.textContent = data.family_name
          email.textContent= data.email
          verifiedEmail.textContent = data.email_verified
          picture.setAttribute("src", data.picture)
        }
        window.onload = function () {
          // ID TESTE : 711783365032-3gg8tp8laa7hub0l08j7b63uo9ej2tjb.apps.googleusercontent.com
          google.accounts.id.initialize({
            client_id: "711783365032-3gg8tp8laa7hub0l08j7b63uo9ej2tjb.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });

          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_blue", 
              size: "large",
              type:"standard",
              shape:"pill",
              text:"continue_with",
              ogo_alignment:"left",
              width:"300",
        }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }
 