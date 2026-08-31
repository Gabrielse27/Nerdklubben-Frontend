## Nerdklubben Application


* A fullstack web application for **Nerdklubben** featuring a member application form, backend persistence in SQL Server, and automatic confirmation emails sent via SendGrid.

* A new member who is registered in the form on web page Nerdklubben its will be registered in the SQL Server database, and after that the new member will get a notification on e-mail that the registration its confirmed.

* Fully responsive design optimized for mobile, tablet, and desktop views with responsive navigation.

### 1. Running the Frontend (Next.js)
1. Open PowerShell and make sure you navigate to the correct frontend folder:
   ```powershell
   cd nerdklubben-web
   npm run dev
  Open the application in your browser:   http://localhost:3000 or (http://192.168.1.112:3000).
  
  * Ensure the backend API is running before testing the form( press Play).


## 2. Running the Backend

* Ensure the backend API is running before testing the form (press **Play / F5**).
  
* When backend its starting  , Swagger UI it will be open directly and  its possible to test directly the database.
  
* Configure the required **SendGrid API Key** locally using .NET User Secrets to enable confirmation emails (the API key is provided separately via email).
---

 ## Technologies & API Configuration  

* **Frontend:** Next.js,TypeScript, Tailwind CSS, Responsive Design & Mobile Navigation
* **Backend:** ASP.NET Core Web API , Entity Framework Core
* **Database:** SQL Server 
* **Extern integration program:** SendGrid API (for e-mail notification)
* **Swagger:** For testing database
* **Backend API URL (`https://localhost:7138/swagger`):** The secure local endpoint where the ASP.NET Core Web API runs to receive form submissions, interact with SQL Server, and trigger SendGrid emails.


---
