<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

	public function actionAskquestion()
    {
	    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
	    $req = Yii::$app->request;
	    if ($req->isAjax && $req->getIsPost()) {
		    if(!$req->post('name')){
			    return ['status' => false, 'message' => 'Name missed'];
		    }
		    if(!$req->post('question')){
				return ['status' => false, 'message' => 'Please, write your question'];
		    }
		    if(!$req->post('email') || !preg_match("/.+@.+\..+/i", $req->post('email'))){
			    return ['status' => false, 'message' => 'Invalid email address'];
		    }
			$emailSent = Yii::$app->mailer->compose('askquestion', [
				'email' => $req->post('email'),
				'name'  => $req->post('name'),
				'question' => $req->post('question')
			])
				->setTo(Yii::$app->params['notificationEmail'])
				->setFrom('bot@cifr.us')
				->setSubject('New question in Sceduling')
				->send();
		    return ['status' => $emailSent, 'message' => $emailSent ? 'Thank you, we contact to you as soon as possible' : 'An error occured'];
		}
		return ['status' => false, 'message' => 'not post ajax'];
    }

    public function actionRingback()
    {
	    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
	    $req = Yii::$app->request;
	    if ($req->isAjax && $req->getIsPost()) {
		    if(!$req->post('name')){
			    return ['status' => false, 'message' => 'Name missed'];
		    }
		    if(!$req->post('email') || !preg_match("/.+@.+\..+/i", $req->post('email'))){
			    return ['status' => false, 'message' => 'Invalid email address'];
		    }
			$emailSent = Yii::$app->mailer->compose('ringback', [
				'email' => $req->post('email'),
				'name'  => $req->post('name')
			])
				->setTo(Yii::$app->params['notificationEmail'])
				->setFrom('bot@cifr.us')
				->setSubject('New ringback application in Sceduling')
				->send();
		    return ['status' => $emailSent, 'message' => $emailSent ? 'Thank you, we contact to you as soon as possible' : 'An error occured'];
		}
		return ['status' => false, 'message' => 'not post ajax'];
    }

	public function actionSendEmail(){
		Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
		$data = ["name"=> "", "surname"=> "", "email"=> "", "company"=> "", "country"=> "Select+country", "city"=> "Select+city", "MSPA"=> "", "service"=> "Select+service", "evaluation"=> "Select+evaluation", "industry"=> "Select+industry", "location"=> "Loc1", "reporting"=> "system", "qtlength"=> "", "complexity"=> "Normal", "othercheckbox"=> "false", "othercomment"=> "", "comment"=> ""];
		$req = Yii::$app->request;
		if($req->getIsPost()){
			foreach($req->post() as $k => $v){
				$data[$k] = $v;
			}
		} else {
			return ['status' => false, 'message' => 'not post'];
		}
//		return $this->render('/mail', ['data' => $data]);
//		return 1;
		$emailSent = Yii::$app->mailer->compose('form', ['data' =>$data])
			->setTo(Yii::$app->params['notificationEmail'])
			->setFrom('bot@cifr.us')
			->setSubject('New application in Sceduling')
			->send();
		return ['status' => $emailSent, 'message' => 'sending'];
	}

    /**
     * Login action.
     *
     * @return string
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return string
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }
}
