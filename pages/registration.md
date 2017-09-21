---
layout: splash
title: Registration
permalink: /registration/

header:
  overlay_filter: "rgba(255, 86,  0,0.4)"
  overlay_image: /assets/images/banner_net_2.jpg
---

<div id="sendingRegistration" style="display: none;" class="notice--primary" markdown="span">
<i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"/>
<span style="margin-left: 5px;">One moment please. Sending registration...</span>
</div>

<div id="thanksRegistration" style="display: none;" class="notice--success" markdown="span">
<i class="fa fa-check" aria-hidden="true" />
<span style="margin-left: 5px;">**Thank you!** Your registration has been submitted. We will contact you with further information.</span>
</div>

<div id="errorRegistration" style="display: none;" markdown="span" class="notice--danger">
<i class="fa fa-exclamation" aria-hidden="true" />
<span style="margin-left: 5px;">**Oops.** Something went wrong with submitting your registration. Please try again.</span>
</div>

<div id="errorAttendance" style="display: none;" markdown="span" class="notice--warning">
<i class="fa fa-exclamation-triangle" aria-hidden="true" />
<span style="margin-left: 5px;">Please register your attendance for at least one workshop day.</span>
</div>

To attend the BAFA workshop 2017, please register using the form on this page. Attendance is **free** of charge and includes two full workshop days and a reception on Thursday. Due to limited room capacity, we may need to close registration if maximum capacity is reached. We reserve the right to select participants based on their scientific expertise to ensure the diversity and complementarity among attendees.

To get the most out of the workshop, we encourage attending both days. If you have to be absent on either day, please indicate it accordingly in your registration. If the number of registrations exceeds our capacity, we may give preference to participants who attend the entire workshop.

On the first day, we will have a presentation round in which the participants briefly introduce themselves and their research. [Read more...](/presentation_format)

For questions, remarks or when you need to change your registration, please contact the <a href="mailto:{{ 'bafaworkshop2017@gmail.com' | encode_email }}?Subject=BAFA registration">organizers</a>.


<form id="formRegistration" autocomplete="on">
    <fieldset>
        <label for="register-name">{{ site.data.ui-text[site.locale].comment_form_name_label | default: "Full name" }} <small class="required">*</small></label>
        <input type="text" id="register-name" name="name" tabindex="2" required />
    </fieldset>
    <fieldset>
        <label for="register-email">{{ site.data.ui-text[site.locale].comment_form_email_label | default: "Email address" }} <small class="required">*</small></label>
        <input type="email" id="register-email" name="_replyto" tabindex="3" required />
    </fieldset>
    <fieldset>
        <label for="register-affiliation">{{ site.data.ui-text[site.locale].comment_form_aff_label | default: "Affiliation" }} <small class="required">*</small></label>
        <input type="text" id="register-affiliation" name="affiliation" tabindex="4" required />
    </fieldset>
    <fieldset>
        <label for="register-website">{{ site.data.ui-text[site.locale].comment_form_website_label | default: "Website" }}</label>
        <input type="text" id="register-website" name="website" tabindex="5" />
    </fieldset>
    <div>{{ site.data.ui-text[site.locale].comment_form_att_label | default: "Attendance:" }}
        <ul style="margin-left: 10px;">
            <li><input type="checkbox" id="register-attendance-th" name="attendance_thursday" value="true" checked tabindex="6" /> Thursday, 12 October 2017</li>
            <li><input type="checkbox" id="register-attendance-fr" name="attendance_friday" value="true" checked tabindex="7" /> Friday, 13 October 2017</li>
        </ul>
    </div>
    <fieldset>
        <label for="register-comment">{{ site.data.ui-text[site.locale].comment_form_additional_label | default: "Additional information" }}</label>
        <textarea id="register-comment" name="register-comment" maxlength="1500" tabindex="8"></textarea>
    </fieldset>

    <fieldset class="hidden" style="display: none;">
        <label for="register-location">Not used. Leave blank if you are a human.</label>
        <input type="hidden" id="register-location" name="_gotcha" value="{{ page.slug }}">
    </fieldset>
    <fieldset>
        <button type="submit" id="register-submit" tabindex="9" class="btn btn--large">{{ site.data.ui-text[site.locale].comment_btn_submit | default: "Submit Registration" }}</button>
    </fieldset>
</form>