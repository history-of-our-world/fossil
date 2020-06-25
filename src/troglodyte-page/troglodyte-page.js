import React, {useState} from 'react'
import back from "./background.jpeg"
import "./troglodyte-page.sass"
import bond from "./bond.png"
import misha from "./misha.jpg"
import roma from "./roma.jpg"
import dennis from "./dennis.png"

export const Troglodyte = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className={"troglodyte-page"}>
            {
                modal? <Modal/> : ""
            }
            <div className="background">
            </div>
            <div className="content-wrap">
                <div className="content">
                    <h1>В Украине найден древнейший артефакт</h1>
                    <h3>(фото после небольшой предистории)</h3>
                    <p>
                        Здравствуйте, меня зовут Александр и я являюсь частью команды археологов, которая проводит раскопки в
                        разных уголках Украины в поисках древних артефактов, которые могли бы помочь изучить историю всего
                        человечества.
                    </p>
                    <p>
                        Наша команда уже много лет путешествует по всей стране и регулярно находит древние окаменелости,
                        части скелетов диких животных и старейшие камни, которым, по примерным подсчетам,
                        несколько сотен тысяч лет.
                    </p>
                    <p>
                        Последние недели наша команда была в очередной экспедиции. Мы нашли несколько старых камней,
                        скелет собаки и еще несколько пластиковых бутылок. Но потом мы наткнулись на тот самый артефакт,
                        ту окаменелость, о которой мечтает каждый археолог, и очень немногим из них везет наткнуться на
                        что то подобное.
                        Нашей экспедицией руководил известный археолог Павел Перов (проф. Института Археологии Украины)
                        и я хотел бы привести его реакцию после недолгого изучения артефакта:
                    </p>
                    <blockquote>
                        « Это находка, которая станет открытием тысячилетия, которая в корне изменит взгляд на историю
                        человечества, которая навсегда впишет наши имена в историю...»
                    </blockquote>
                    <p>
                        Уже через несколько дней эту новость разнесут СМИ и я не имею права много рассказывать об экземпляре.
                        Но могу сказать, что это находка, которая не похожа ни на одну из найденных ранее, а её возраст
                        превышает возраст динозавров. Да, именно так, возможно, мы нашли самый старый образец,
                        о котором ничего не известно науке. Это невероятно странно - видеть предмет, которому
                        миллионы лет, в нашем мире технологий. Похоже, что прошлое и будущее буквально пересекаются, и я
                        очень рад быть частью этого процесса и присутствовать при этом открытии.
                    </p>
                    <p>
                        Но, что еще более странно, на артефакте наложен рисунок, которому столько же лет,
                        сколько и самому предмету и происхождение которого очень сложно обьяснить.
                    </p>
                    И теперь, обещанное и пока что единственное, фото артефакта:
                    <button onClick={() => setModal(true)}>Фото</button>
                </div>
            </div>
        </div>
)
}

const Modal = () => {
    return (
        <div className={'modal-wrap'}>
            <img src="https://lh3.googleusercontent.com/proxy/C23nz7yJiHSEc-o2ZlEjg9MNb_-dyNZZtttuvMs5zBxKTOoqZoSgmIAWLFbHlaALmjgzT127r0PTY1F-XMLkxvsZmnRiMRBG3wslr2LwEE3wgOk" alt="" className="gif1"/>
            <img src="https://thumbs.gfycat.com/FemaleSophisticatedIguanodon-small.gif" alt="" className="gif2"/>
            <img src="https://i.gifer.com/origin/75/75a6a4f3d98f23665ba25b6dd880ac4c_w200.gif" alt="" className="gif3"/>
            <img src="https://i.gifer.com/origin/39/39f3e4ab67f48b9a0f76e784b6194faf_w200.gif" alt="" className="gif4"/>
            <div className="modal">
                <h3>Фото древнего артефакта с выгривированным на нем рисунком</h3>
                <div className="img-wrap">
                    <img src={bond} alt=""/>
                </div>
                <div className="likes-box">
                    Нравится:
                    <div className="likes">
                        <img src={dennis} alt=""/><img src={misha} alt=""/><img src={roma} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}