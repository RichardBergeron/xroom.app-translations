export default {
  self: 'xroom',
  on: 'on',
  off: 'off',
  title: '¿Quieres una conferencia?',
  buttons: {
    ok: 'OK',
    yes: 'Sí',
    no: 'No',
    cancel: 'Cancelar',
    retry: 'Reintentar',
    chooseWindow: 'Elegir ventana',
    wholeScreen: 'Pantalla completa',
    install: 'Agregar',
    uninstall: 'Eliminar',
    send: 'Enviar',
    close: 'Cerrar',
    hide: 'Ocultar',
    knock: 'Noc-noc',
    allowIn: 'Admitir',
    deny: 'Denegar',
    enterAnyway: 'Enter anyway',
  },
  mbox: {
    notSupported: 'Parece que este navegador no soporta XROOM o WebRTC está deshabilitado. 😢',
    success: 'Operación exitosa',
    failure: 'Operación fallida',
    enterRoomName: 'Ingresa un nombre de sala',
    isCamOn: '¿Cámara encendida?',
    isCamOnText: 'Revisa si la cámara/el mic no están bloqueados para este sitio y presiona "Reintentar".',
    isMicOn: '¿Micrófono encendido?',
    isMicOnText: 'Si deseas hablar, debes habilitar el mic. Habilítalo para esta página y presiona "Reintentar".',
    iWillOnlyWatch: 'Solo miraré',
    iWillOnlyListen: 'Solo escucharé',
    screenSharingText: 'No es posible compartir pantalla. Asegúrate de que la función no esté bloqueada para esta página.<br><br>La función sólo está disponible en navegadores modernos como Chrome o Firefox.',
    cannotFile: 'Como no guardamos tus archivos, no podemos entregarlos en diferido. Debes hacerlo online.',
    cannotMessage: 'Como no almacenamos tus mensajes, no podemos entregarlos en diferido. Debes hacerlo online.',
    roomLockedText: 'Esta sala está bloqueada',
    oops: 'Lo sentimos',
    kickedOutText: 'Te han expulsado',
    areYouSure: '¿Estás seguro?',
    doYouWantToLeave: '¿De veras deseas irte?',
    doYouWantToLeaveAsHost: '¿De verdad quieres dejar de transmitir?',  // validate translation
    restartRequiredText: 'Este ajuste afecta muchas cosas, así que hace falta volver a cargar. ¡Es rápido, no te preocupes!',
    onlySafariOnIOS: 'En iOS solo es compatible Safari. ¡"Gracias", Apple!',
    cannotLoadPlugin: 'El plugin "%s" no es compatible con tu navegador',
    confirmFileSend: '¿Deseas enviar esto?',
    whatIsYourName: 'Ingresa un nuevo nombre',
    setVideoVolume: 'Establece el volumen del video',
    roomLockedTryKnockText: 'Por ahora, la sala está bloqueada. Puedes pedir permiso para entrar golpeando la puerta.',
    knockingFailedText: 'Intento de golpeo fallido',
    doYouWantToKick: '¿Deseas expulsar a este usuario?',
    deviceChanged: 'Has añadido/quitado un dispositivo de entrada. Si no funciona, elígelo manualmente en los Ajustes.',
    allowCameraPlz: 'Tras presionar OK, <b>permite</b> que xroom use la cámara.<br><br>¡No te preocupes! Podrás apagarla antes de entrar a la sala desde el menú inferior si deseas permanecer invisible.',
    tooOldBrowser: 'Tu navegador es muy antiguo o es de Microsoft. Te perderás de varias funciones.',
    pluginsLoadFailed: 'Error al cargar plugins',
    protoExpired: 'Versión del cliente demasiado antigua. Presione Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 para volver a cargar. Si luego vuelve a ver este mensaje, borre la memoria caché del navegador manualmente.',
    peerError: 'Algo salió mal al intercambiar datos con sus compañeros. Sugerimos volver a cargar la página.',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'El usuario %s sugirió que instale el complemento %s. ¿Desea hacerlo?',
    hostRoleRequired: 'Se requiere el rol de host para esta acción.',
    alreadyHosted: 'Room is already hosted. Do not enter the same room from 2 browser tabs. 😉',
    roomLockedPassword: 'Room is currently locked with a password. Enter it below if you know it.',
  },
  home: {
    nisdos: 'No usamos cookies',
    title: 'Tu propia sala de conferencias',
    btnGo: '¡Ok!',
    knowMore: 'Sobre xroom',
    nameRoom: 'nombra tu sala:',
    placeholder: 'escribe aquí',
    rejoinRoom: 'o regresa',
  },
  wl: {
    poweredBy: 'Desarrollado por',
  },
  modes: {
    1: 'Conferencia',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Elija el tipo de habitación',
    checkIt: 'Verifica el mic y tu cabello',
    btnGo: 'Ingresar',
    knockDenied: 'Tu solicitud de acceso fue denegada. No puedes entrar a la sala. :(',
    knockRequested: 'Esperando permiso. Pueden verte por la mirilla. 👀',
    noAudio: '⚠️ No se detecta señal de mic',
    roomIsBusyWebinar: 'Un webinar/stream esta corriendo (%s × 🙂)',  // validate translation
    roomIsBusyConference: 'Una conferencia está corriendo (%s × 🙂)',  // validate translation
  },
  videoMenu: {
    hint: 'Cambiar menú',
    expand: 'Expandir',
    fullscreen: 'Pantalla completa',
    volume: 'Volumen ±',
    restore: 'Restaurar',
    kick: 'Expulsar',
  },
  controls: {
    ss: 'Pantalla compartida %s',
    cam: 'Cámara %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Salir',
    xroom: 'Desarrollado por xroom',
    settings: 'Ajustes',
    plugins: 'Plugins',
    media: 'Media',
    more: 'Más',                    // validate translation
    letMeSpeak: '¡Déjame hablar!',  // validate translation
  },
  reactions: {
    letMeSpeak: '¡Quiero hablar!',  // validate translation
  },
  waiting: {
    invite: 'Invita a tus colegas',
    beforeCopy: 'clic para copiar',
    afterCopy: 'Copiado ¡Compártelo!',
    webinar: 'El webinar aún no empezó',
  },
  video: {
    you: 'Tú (clic para nombrar)',
    someone: 'Alguien',
    knocking: 'golpea la puerta...',
    poorNet: 'conexión débil',
  },
  chat: {
    fileSending: 'Enviando archivo: ',
    fileReceived: 'Archivo recibido: ',
    inputPlaceholder: 'ingresa un mensaje y presiona enter...',
    me: 'yo',
    dropMe: '¡Suéltalo aquí!',
  },
  webinar: {
    peersCount: '%s personas mirando',
  },
  settings: {
    experimental: '*) experimental, inestable',
    showCameraWithScreen: 'Mostrar cámara al compartir pantalla *',
    qualityLevel: 'Alta calidad (usa más tráfico)',
    autoGetIn: 'Empezar chat sin previsualización',
    soundEffects: 'Efectos de sonido',
    noisyBackground: 'Estoy en un lugar ruidoso',
    rtcDebug: 'Depurar RTC',
    audioDevices: 'Fuentes de audio',
    videoDevices: 'Fuentes de video',
    language: 'Idioma',
    theme: 'Tema de color',
    server: 'Servidor',
  },
  plugins: {
    by: 'de',
    size: 'tamaño: %s kB',
    searchPlaceholder: 'buscar...',
    source: 'Código fuente',
    add: {
      title: 'Agregar plugin nuevo',
      descr: '⚙️ ¿Desarrollando un plugin nuevo? Agrégalo aquí para probarlo. No se guarda, al actualizar la página se borra de la memoria. Encuentra el manual de la API para plugins <a href="https://github.com/punarinta/xroom-plugins" target="_blank">aquí</a>.',
      name: '¿Nombre del plugin?',
      rootUrl: '¿Dónde está la raíz del plugin?',
      loaded: '¡Sí! ¡Se cargó!',
      loadFailed: 'Falló la carga del plugin',
    },
  },
  feedback: {
    header: 'Lo sentimos. Un momento...',
    question: '¿Estuvo todo bien esta vez?',
    videoFroze: 'No, se congelaba el video',
    soundLagged: 'No, se atrasaba el sonido',
    cantConnect: 'No, alguien no pudo conectarse',
    smthElse: 'Otra cosa:',
    feedbackInput: 'deja tu feedback...',
    contactMe: 'Contactarme, por favor:',
    emailInput: 'tu email...',
  },
  tips: {
    prefix: 'Tip del día: ',
    lines: [
      '¿Silencias el mic a menudo? Puedes hacerlo con la tecla "m".',
      'Haz doble clic en un video remoto para ponerlo en pantalla completa.',
      '¿Necesitas bloquear tu sala? Solo añade los plugins de bloqueo de sala a continuación.',
      '¿Usas Slack y quieres ganar más tiempo? Prueba nuestro <a href="//about.xroom.app/en/library/slack-bot" target="_blank">bot de Slack</a>.',
      '¿Te pierdes las videollamadas de Telegram? Nuestro <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">bot de Telegram</a> está para ayudarte.',
      'Para compartir una imagen copiada, presiona Ctrl+V in el chat. Nosotros nos ocupamos del resto.',
      'Haz clic en tu nombre para cambiarlo para ti y para los demás.',
      '¿Alguna vez quisiste grabar la pantalla con un par de clics? Prueba nuestro plugin de grabación de pantalla.',
    ],
  },
}
