// Document references to job submission elements

let P_out = document.getElementById("P_o/P-out");
let T_out = document.getElementById("T_o/T-out");
let rho_out = document.getElementById("rho_o/rho-out");

let g_val = null;
let M_val = null;

function update_gamma(val){
    g_val = val;
    solve_state();
}

function update_mach(val){
    M_val = val;
    solve_state();
}

function solve_state(){

    let g_defined = (g_val != null) && (g_val.length != 0);
    let M_defined = (M_val != null) && (M_val.length != 0);

    let g = Number(g_val)
    let M = Number(M_val)

    console.log(typeof g + " " + g)
    console.log(typeof M + " " + M)

    if (g_defined && M_defined){
        //Calculate the set of outputs
        t_val = 1 + (M**2) * (g-1) / 2;
        p_val = t_val ** (g / (g-1));
        d_val = t_val ** (1 / (g-1));

    }
    else{
        //Calculate the set of outputs
        t_val = "";
        p_val = "";
        d_val = "";
    }

    //Temporarily remove the readonly attributes
    T_out.removeAttribute('readonly');
    P_out.removeAttribute('readonly');
    rho_out.removeAttribute('readonly');

    //Update the input fields with the calculated values
    T_out.value = t_val;
    P_out.value = p_val;
    rho_out.value = d_val;

    //Re-add the readonly attributes
    T_out.setAttribute('readonly', true);
    P_out.setAttribute('readonly', true);
    rho_out.setAttribute('readonly', true);

}

/**
 * Set the message at the bottom left hand corner of the report submission modal. If the current message
 * being displayed is timed, it will stop and be replaced with the new one.
 *
function setReportMessage(message, colour){
	if (isShowingTimedMessage){
		clearInterval(timedMessage);
	}
	reportMessage.textContent = message;
	reportMessage.style.color = colour;
}

/**
 * Display a message that times out after a specified duration.
 *
function showTimedReportMessage(message, colour, duration, onShow, onTimeout){
	if (isShowingTimedMessage){
		clearTimeout(timedMessage);
	}

	setReportMessage(message, colour);
	isShowingTimedMessage = true;
	onShow();

	timedMessage = setTimeout(function () {
		setReportMessage("", "white");
		isShowingTimedMessage = false;
		onTimeout();
	}, 
	duration);
}

/**
 * Display an error message that shakes the modal and times out after 3 seconds.
 *
function displayReportError(errorMessage) {
	showTimedReportMessage(errorMessage, "var(--bs-danger)", 3000, function(){
		createReportModalElement.classList.add("animate__animated", "animate__shakeX");
	}, function(){
		createReportModalElement.classList.remove("animate__animated", "animate__shakeX");
	});
}

/**
 * Toggle job submission (i.e., whether you can submit jobs or not).
 *
function setReportEnabled(isEnabled) {
	createReportButton.disabled
		= reportName.disabled
		= reportLanguage.disabled
		= reportMaxMatchesUntilIgnored.disabled
		= reportMaxMatchesDisplayed.disabled
		= !isEnabled;
}

createReportForm.onsubmit = async (e) => {
	e.preventDefault(); // Prevent the modal from closing immediately.
	
	try {
		// Create a new form (and capture name, language, max matches until ignored and max matches displayed)
		let reportFormData = new FormData(createReportForm);
		setReportEnabled(false);
		setReportMessage("Stitching...", "white");

		// Submit the job (must use XMLHttpRequest to receive callbacks about upload progress).
		let xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('POST', NEW_JOB_URL);

		// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload
		// Other events: error, abort, timeout

		xhr.upload.addEventListener('loadstart', e => {
			setReportMessage("Uploading (0%)", "white");
		});
		xhr.upload.addEventListener('progress', e => {
			let percentage = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
			setReportMessage(`Uploading (${percentage.toFixed(0)}%)`, "white");
		});
		// Done uploading, now server is processing upload (writing files to disk).
		xhr.upload.addEventListener('load', e => {
			setReportMessage("Waiting for server...", "white");
		});
		xhr.onreadystatechange = function (){ // Call a function when the state changes.
			if (this.readyState === XMLHttpRequest.DONE){
				if (this.status === 200){

					// Obtain job as json data and add to the jobs table.
					let json = xhr.response;
					addJob(json, true);
					unfinishedJobs.push(json["job_id"]);

					// Hide and reset the form and dropzone.
					createReportModal.hide();
					setTimeout(() => { // Timeout to ensure that the modal only clears once closed.
						createReportForm.reset();
						updateForBaseFiles();
						setReportEnabled(true);
						setReportMessage("", "white");
					}, 200);

				}else if (this.status === 400){ // Server returns an error message regarding the submission.
					try {
						displayReportError(xhr.response.message);
					} catch (error) {
						displayReportError(error);
					}
					setReportEnabled(true);
				}
			}
		}
		xhr.send(reportFormData);

	}catch(err){ // Unknown client-side error.
		console.error(err);
		displayReportError("An error occurred.");
		setReportEnabled(true);
	}
}; */