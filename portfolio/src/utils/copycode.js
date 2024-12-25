const copyCode = (codeId, buttonElement) => {
    // Get the code element by its ID
    const codeElement = document.getElementById(codeId);
    if (codeElement) {
        // Copy the text content of the code element to the clipboard
        navigator.clipboard.writeText(codeElement.textContent).then(() => {
            // Change button text to "Copied" after successful copy
            buttonElement.textContent = "Copied";
            // Reset the button text back to "Copy" after 2 seconds
            setTimeout(() => {
                buttonElement.textContent = "Copy";
            }, 2000);
        }).catch(err => {
            // Log any errors encountered during the copy operation
            console.error("Failed to copy code: ", err);
        });
    }
};

export default copyCode;
