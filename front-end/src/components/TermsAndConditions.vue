<template>
    <div>
        <Header />
        <div class="container">
            <br />
            <br />
            <br />
            <br />
            <h1>Terms and Conditions</h1>
            <hr />
            <p>Last updated: 27th of February, 2019</p>
            <br />
            <p>
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully
                before using the
                <b>werdz.fun</b> website (the "Service") operated by <b>William Cooter</b> ("us",
                "we", or "our"). Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply to all visitors,
                users and others who access or use the Service. By accessing or using the Service
                you agree to be bound by these Terms. If you disagree with any part of the terms
                then you may not access the Service.
            </p>
            <br />
            <h2>Accounts</h2>
            <p>
                When you create an account with us, you must provide us information that is
                accurate, complete, and current at all times. Failure to do so constitutes a breach
                of the Terms, which may result in immediate termination of your account on our
                Service. You are responsible for safeguarding the password that you use to access
                the Service and for any activities or actions under your password, whether your
                password is with our Service or a third-party service. You agree not to disclose
                your password to any third party. You must notify us immediately upon becoming aware
                of any breach of security or unauthorized use of your account.
            </p>
            <br />
            <h2>Links To Other Web Sites</h2>
            <p>
                Our Service may contain links to third-party web sites or services that are not
                owned or controlled by us. We have no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third party web sites or
                services. You further acknowledge and agree that we shall not be responsible or
                liable, directly or indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such content, goods or
                services available on or through any such web sites or services. We strongly advise
                you to read the terms and conditions and privacy policies of any third-party web
                sites or services that you visit.
            </p>
            <br />
            <h2>Termination</h2>
            <p>
                We may terminate or suspend access to our Service immediately, without prior notice
                or liability, for any reason whatsoever, including without limitation if you breach
                the Terms. All provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without limitation, ownership
                provisions, warranty disclaimers, indemnity and limitations of liability. We may
                terminate or suspend your account immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms.
                Upon termination, your right to use the Service will immediately cease. If you wish
                to terminate your account, you may simply discontinue using the Service. All
                provisions of the Terms which by their nature should survive termination shall
                survive termination, including, without limitation, ownership provisions, warranty
                disclaimers, indemnity and limitations of liability.
            </p>
            <br />
            <h2>Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of United
                Kingdom, without regard to its conflict of law provisions. Our failure to enforce
                any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a
                court, the remaining provisions of these Terms will remain in effect. These Terms
                constitute the entire agreement between us regarding our Service, and supersede and
                replace any prior agreements we might have between us regarding the Service.
            </p>
            <br />
            <h2>Changes</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at
                any time. If a revision is material we will try to provide at least 30 days notice
                prior to any new terms taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or use our Service after
                those revisions become effective, you agree to be bound by the revised terms. If you
                do not agree to the new terms, please stop using the Service.
            </p>
            <br />
            <h2>Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at
                <b>game.cooter@gmail.com</b>.
            </p>
            <br />
            <el-button type="primary" plain v-on:click="redirect">Back to login</el-button>
            <br />
            <br />
            <br />
        </div>
    </div>
</template>

<script>
import Header from './Header'
import { mobileCheck } from '../assets/mobileCheck'

export default {
    name: 'TermsAndConditions',
    components: {
        Header,
    },
    created() {
        mobileCheck() ? this.$router.push({ name: 'MobileRedirect' }) : console.log()
    },
    methods: {
        redirect() {
            this.$router.push({ name: 'SignUp' })
        },
    },
}
</script>

<style scoped>
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
