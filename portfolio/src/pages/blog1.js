import React from "react";
import Contact from "./contact.js";
import { useState } from "react";
import "../css/blog1.css"; // Ensure the CSS file is named properly
import Footer from './footer.js';
import keyImg from '../assets/blog1/actikey.png';
import blockerimg from '../assets/blog1/blocker-status.png';
import rufus_site from '../assets/blog1/rufus.png';
import img3 from '../assets/blog1/img3.png';
import img4 from '../assets/blog1/img4.png';
import img5 from '../assets/blog1/img5.png';
import img6 from '../assets/blog1/img6.png';
import img7 from '../assets/blog1/img7.png';
import img7_2 from '../assets/blog1/img7-2.png';
import img8 from '../assets/blog1/img8.png';
import img9 from '../assets/blog1/img9.png';
import ins_type from '../assets/blog1/inst-type.png';

const GuideToInstallingUbuntuLinux = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="blog-container">
        <header className="header">
          <h1>Guide to Installing Ubuntu Linux by Completely Replacing Windows</h1> <br />
        </header>
        <p className="article-author" style={{ textAlign: 'right' }}>
          <strong>Blog post by:</strong> <i>{" "}Chandu Chitteti</i>
        </p>
        <hr />
        <div className="blog-content-container">
          <div className="section">
            <h2>1. Preparing for Installation</h2>
            <h3>Backup Important Data</h3>
            <p>Before starting, back up all essential data:</p>
            <ul>
              <li>
                <strong>Windows Key Backup:</strong> Open a terminal with administrator rights and run the following command:
                <code>wmic path SoftwareLicensingService get OA3xOriginalProductKey</code>
                Save this key for future reference. <br />
                <img className="ref-image" src={keyImg} alt="windows-activation-key" />
                <i><strong>Note:</strong> </i><p>Backing up the Windows product key is a low-effort safety measure to protect your investment in the Windows operating system, ensuring you retain the flexibility to reinstall it later if needed.</p>
              </li>
              <li>
                <strong>Backup Your Files:</strong> Save all critical documents, media, and files to an external drive.
                <br />
                <i><strong>Tip: </strong></i> <p>An easy way to back up your important folders, like images and projects, is to create a private GitHub repository. Add your files to a local Git repository, commit them, and push them to GitHub. This keeps your data secure in the cloud, accessible only to you, and available to download or clone whenever needed.</p>
              </li>
            </ul>

            <h3>Check and Disable Drive Protection</h3>
            <ol>
              <li>Open <code>manage-bde</code> (BitLocker Manager).</li>
              <li>Check for drive protection and disable it for the primary partition: <code>manage-bde -status</code> and <code>manage-bde -protectors -disable C:</code></li>
              <li>Ensure "Protection On" is switched to "Off."</li>
              <li>This ensures that the drive is no longer encrypted, preventing issues during the Ubuntu installation process and allowing the installer to access and format the drive without restrictions.</li>
            </ol>
            <img className="ref-image" src={blockerimg} alt="windows-bidlocker-deactivation" />
          </div>

          <div className="section">
            <h2>2. Creating a Bootable USB</h2>
            <h3>Download Software</h3>
            <ul>
              <li>Download <strong>Rufus</strong> (USB bootable software) from the
                <a href="https://rufus.ie/en/" target="_blank" rel="noreferrer"> official Rufus Site</a></li>
              <p>Go with <u>standard</u> installation type based on system bit (x64) in mycase.</p>
              <img src={rufus_site} alt="rufus_installation_site" />
              <li>
                Download the <strong>Ubuntu ISO file</strong> from the
                <a href="https://ubuntu.com/download" target="_blank" rel="noreferrer"> official Ubuntu website</a>.
              </li>
            </ul>

            <h3>Prepare the USB</h3>
            <p>We have only 2 things to update and the rest remains as it is.</p>
            <ol>
              <li>Open Rufus by clicking on downloaded file</li>
              <li>Insert your USB drive, system automatically chooses it. (if not choose manually)</li>
              <li>Load the Ubuntu ISO into Rufus.(by clicking on select button)</li>
              <p>This erases all USB data. So make sure you backup your usb data if any in advance.</p>
              <b>Note:</b><p>Remaining all options remains same by default</p>
              <li>Click <strong>Start</strong> to create a bootable USB.</li>
            </ol>
            <img src={img3} alt="usb-setup" />
          </div>

          <div className="section">
            <h2>3. Configuring BIOS Settings</h2>
            <p>Configuring Bios settings is ok! during this process. Fell free to explore them and do the following things:</p>

            <h3>Accessing BIOS Through Traditional Keys</h3>
            <ol>
              <li>Restart your computer.</li>
              <li>
                During startup, press the appropriate key to enter BIOS/UEFI (usually <code>F2</code>, <code>F12</code>, or <code>Del</code>).
              </li>
              <div className="section">
                <h3 onClick={toggleVisibility} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
                  Accessing BIOS Through Advanced Options
                </h3>
                {isVisible && (
                  <ol>
                    <li>
                      <strong>Hold the Shift Key:</strong>
                      <ul>
                        <li>On your Windows desktop, click the Start Menu.</li>
                        <li>
                          While holding the <strong>Shift</strong> key, click <strong>Power -- Restart</strong>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Wait for Advanced Startup Options:</strong>
                      <ul>
                        <li>
                          The system will restart and display the Advanced Startup Options menu.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Navigate to UEFI Firmware Settings:</strong>
                      <ul>
                        <li>Click <strong>Troubleshoot</strong>.</li>
                        <li>Select <strong>Advanced Options</strong>.</li>
                        <li>Click <strong>UEFI Firmware Settings</strong> (if available).</li>
                        <li>
                          Choose <strong>Restart</strong> to boot directly into your BIOS/UEFI.
                        </li>
                      </ul>
                    </li>
                  </ol>
                )}
              </div>
              <b>Note:</b> <p>Continouesly press the appropriate key. if missed timing,. Restart and tryagain.</p>
              <li>Below image with keys may help you. Check it out. </li>
              <li>Disable <strong>Secure Boot</strong> and <strong>Fast Boot</strong>.</li>
              <li>Set the <strong>Boot Priority</strong> to USB as the first boot device. This ensures your system always boots into usb first if pluggedin during reboot</li>
            </ol>
            <img src={img4} alt="Bios-keys" />
          </div>

          <div className="section">
            <h2>4. Installing Ubuntu</h2>
            <h3>Boot from USB</h3>
            <ol>
              <li>Insert the bootable USB into your system.</li>
              <li>Restart your system and boot from the USB.</li>
            </ol>
            <img src={img5} alt="usb-booting" />
            <h3>Follow the Installation Process</h3>
            <ol>
              <li>Select your <strong>Language</strong> and regional preferences.</li>
              <li>When asked choose/try ,. Choose <strong>Install Ubuntu</strong> to proceed. You will also have <strong>Try Ubuntu</strong> but we dont wanna choose it.</li>
              <img src={img6} alt="install-ubuntu" />
              <li>When asked installation type, choose <b>full installation</b> if you need <u>office tools</u> and stuff else go with <strong>partial installation</strong></li>
              <img src={ins_type} alt="installation-type" />
              <li><strong>Partition the Disk:</strong> Choose <b><i>Erase Disk and Install Ubuntu</i></b> to overwrite Windows completely. Advanced users can opt for manual partitioning.</li>
              <img src={img7} alt="erease-disk-and-install" />
              <li>Click <strong>Install Now</strong> and let Ubuntu format the disk and install the OS.</li>
              <img src={img7_2} alt="install-now" />
              <li>Set your <strong>username</strong> and <strong>password</strong> to configure the device.</li>
              <img src={img8} alt="user-setup" />
            </ol>
          </div>

          <div className="section">
            <h2>5. Post-Installation</h2>
            <ol>
              <li>Once installation is complete, it asks you to reboot the system, click on it and do it.</li>
              <img src={img9} alt="restart" />
              <li>Remove the USB when prompted.</li>
              <li>Log in using your credentials and explore Ubuntu Linux.</li>
            </ol>

            <h3>Optional: Upgrade Ubuntu</h3>
            <p>If needed, update to the latest Ubuntu version:</p>
            <code>sudo apt update && sudo apt upgrade -y</code> <br /><code>-y</code> is to accept everythig during updation.
            <p>Since we are doing it first time, it will take time.Sit relax and enjoy your coffee.</p>

          </div>

          <p>
            You now have Ubuntu installed on your device, ready for use. Enjoy the freedom and flexibility of Linux!
          </p>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
};

export default GuideToInstallingUbuntuLinux;
