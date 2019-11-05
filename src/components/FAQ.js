import React, { Component } from 'react';
 

class FAQ extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div>
<br/>
<section id="top_banner">

        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <h4 style={{textAlign:'center'}}>Frequently Asked Questions</h4>
                    </div>
                </div>
            </div>
        </div>

        
    </section>


    <section id="faq">
        <div class="titlebar">
            <div class="container">
                <div class="row">
                    <div class="section-heading text-center">
                        <div class="col-md-12 col-xs-12">
                            <p class="subheading">"A single question may contain more gunpowder than a thousand answers"</p>
                        </div>
                    </div>
                </div>



                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="rich-accordian">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Do the children learn about God in the school?
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body">
                                    Absolutely! Gospel preaching is one of our core values In the school. Children will learn about God and Jesus love for them and all humanity. We take special care with Bible reading, and praying everyday just before raising the Dominican flag and singing the national anthem. We also share Bible classes and provide spiritual counseling.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is the process to sponsor a child?
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                    Sponsoring a child is very easy: <br/>
1.	E-mail us asking for children profile to be sponsored.<br/>
2.	We will send you a couple of the most needed cases.<br/>
3.	You choose the boy/s or girl/s that touched your heart.<br/>
4.	You will be receiving a package with all the information of the children and also you will be able to receive and send letters to your sponsored child/children.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What kind of communication can I have with my sponsored child?
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div class="panel-body">
                                    Every year you will be receiving a letter and an actual picture of the child/children you sponsor. You are also welcome to write them, let them know about you, your family, pets, hobbies, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="rich-accordian">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingfour">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                                        What if I’m Canadian?
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapsefour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfour">
                                    <div class="panel-body">
                                    We have partnership agreements with a Canadian organization named "Child Care International" who is our intermediary between Canadian sponsors/donors and the Nest of Love Foundation. They keep a database of the sponsored children and their sponsors but also the children to be sponsored. They have years of experience keeping the communication between the children and their sponsors, tax receipts and any further information needed. They will also collect the funds and wire them to our organization.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingfive">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        What
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapsefive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfive">
                                    <div class="panel-body">
                                    No problem, you can stop whenever you want, hopefully we will find another sponsor for him/her.
                                    </div>
                                </div>
                            </div>

                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingsix">
                                    <h4 class="panel-title">
                                        <div class="icon-circle"> <i class="fa fa-question-circle"></i></div>
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                        How will these funds be used?
                                    </a>
                                    </h4>
                                </div>
                                <div id="collapsesix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingsix">
                                    <div class="panel-body">
                                    Much less than the 50% of our students are sponsored, because we don’t wait until a child is sponsored to accept them in the school, but sponsored children are not treated differently from the ones that are not sponsored. So, we put all the funds into a pool and use them to cover all the needs of the schools. The funds will be used to pay the teachers and staff (porter, cleaning, etc.), health insurance, but also for the operational expenses such as school supplies, teachers and students supplies, cleaning supplies, electricity and others.
What if I would like to sponsor a special project?
No problem, e-mail us at nestoflovefoundation@outlook.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>






   

                </div>
        
        );
    }
}

export default FAQ;