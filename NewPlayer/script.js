document.getElementById("new-player-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // קבלת הערכים מהטופס
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // שליחה למונגו (יש להוסיף את הקוד המתאים לשליחה למונגו)
    // לצורך הדוגמה, נניח שמסד הנתונים מגיב עם הודעה אם הכתובת כבר קיימת
    checkEmailExists(email)
        .then(emailExists => {
            if (emailExists) {
                document.getElementById("error-message").style.display = "block";
            } else {
                document.getElementById("error-message").style.display = "none";
                registerNewPlayer(username, email, password);
            }
        })
        .catch(error => {
            console.error("Error checking email: ", error);
        });
});

function checkEmailExists(email) {
    // זהו קוד דמה. יש להחליף את זה בקוד אמיתי שמבצע קריאה למסד נתונים
    return new Promise((resolve, reject) => {
        // דמוי בדיקה (לא אמיתי)
        const existingEmails = ["test@example.com", "user@example.com"];
        resolve(existingEmails.includes(email));
    });
}

function registerNewPlayer(username, email, password) {
    // שליחת המידע למונגו (החלף את הקוד הזה בממשק עם ה-API שלך)
    console.log("Registering new player:", { username, email, password });
    // הוספת שחקן למונגו פה
}
