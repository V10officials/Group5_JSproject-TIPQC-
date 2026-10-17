/* ============================================================
   SportsHub — auth pages logic
   Used by: login.html, signup.html, forgotpassword.html
   (Load script.js first, then this file.)
   ============================================================ */


/* ---------- Header / Footer ---------- */

renderHeader("");
renderFooter();


/* ---------- Accounts (demo only: saved in this browser) ---------- */

const ACCOUNTS_KEY = "sportshub_accounts";


function getAccounts() {
  try {
    return JSON.parse(
      localStorage.getItem(ACCOUNTS_KEY)
    ) || [];
  } catch (e) {
    return [];
  }
}


function saveAccounts(list) {
  localStorage.setItem(
    ACCOUNTS_KEY,
    JSON.stringify(list)
  );
}


function findAccount(email) {
  const e = String(email).trim().toLowerCase();

  return getAccounts().find(
    a => String(a.email).trim().toLowerCase() === e
  ) || null;
}


function addAccount(account) {
  const list = getAccounts();

  list.push(account);

  saveAccounts(list);
}


function updateAccountPassword(email, newPassword) {
  const e = String(email).trim().toLowerCase();

  const list = getAccounts();

  const acct = list.find(
    a => String(a.email).trim().toLowerCase() === e
  );

  if (!acct) return false;

  acct.password = newPassword;

  saveAccounts(list);

  return true;
}


function showError(el, message) {
  el.textContent = message;
  el.style.display = "block";
}


function hideError(el) {
  el.style.display = "none";
}


/* ============================================================
   LOGIN PAGE
   ============================================================ */

const loginForm = document.getElementById("login-form");

if (loginForm) {

  // If already logged in, skip straight to the account page.
  if (getUser()) window.location.href = "account.html";

  loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const errorEl = document.getElementById("login-error");

    if (!email.includes("@") || password.length < 6) {
      showError(
        errorEl,
        "Enter a valid email and a password of at least 6 characters."
      );
      return;
    }

    // If this email has a saved account, the password must match it.
    const account = findAccount(email);
    let name;

    if (account) {

      if (account.password !== password) {
        showError(errorEl, "Incorrect email or password.");
        return;
      }

      name = account.name;

    } else {

      // No saved account for this email: demo behavior,
      // remember a display name made from the email.
      name = email
        .split("@")[0]
        .replace(/[._]/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());

    }

    hideError(errorEl);

    setUser({ name, email });

    window.location.href = "account.html";

  });

}


/* ============================================================
   SIGN UP PAGE
   ============================================================ */

const signupForm = document.getElementById("signup-form");

if (signupForm) {

  if (getUser()) window.location.href = "account.html";

  signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;
    const errorEl = document.getElementById("signup-error");

    if (!name || !email.includes("@") || password.length < 6 || password !== confirm) {
      showError(
        errorEl,
        "Passwords must match and be at least 6 characters."
      );
      return;
    }

    if (findAccount(email)) {
      showError(
        errorEl,
        "An account with that email already exists. Try logging in."
      );
      return;
    }

    hideError(errorEl);

    // Demo-only auth: saved locally in this browser, no real backend.
    addAccount({ name, email, password });

    setUser({ name, email });

    window.location.href = "account.html";

  });

}


/* ============================================================
   FORGOT PASSWORD PAGE
   ============================================================ */

const stepEmail = document.getElementById("step-email");

if (stepEmail) {

  const stepReset = document.getElementById("step-reset");
  const stepDone  = document.getElementById("step-done");

  const emailError = document.getElementById("email-error");
  const resetError = document.getElementById("reset-error");

  let resetEmail = "";


  /* STEP 1: find the account */

  stepEmail.addEventListener("submit", (e) => {

    e.preventDefault();

    hideError(emailError);

    const email = document.getElementById("fp-email").value.trim();

    const account = findAccount(email);

    if (!account) {
      showError(
        emailError,
        "No account found with that email. Try signing up first."
      );
      return;
    }

    resetEmail = account.email;

    stepEmail.style.display = "none";
    stepReset.style.display = "block";

    document.getElementById("reset-sub").textContent =
      "Choose a new password for " + account.email + ".";

  });


  /* STEP 2: save the new password */

  stepReset.addEventListener("submit", (e) => {

    e.preventDefault();

    hideError(resetError);

    const newPass = document.getElementById("fp-new").value;
    const confirmPass = document.getElementById("fp-confirm").value;

    if (newPass.length < 6) {
      showError(resetError, "Password must be at least 6 characters.");
      return;
    }

    if (newPass !== confirmPass) {
      showError(resetError, "Passwords do not match.");
      return;
    }

    if (!updateAccountPassword(resetEmail, newPass)) {
      showError(resetError, "Something went wrong. Please start again.");
      return;
    }

    stepReset.style.display = "none";
    stepDone.style.display = "block";

  });

}