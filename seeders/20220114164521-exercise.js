'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const exercises = [
      {
        name: 'Bench press',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 135,
        type: 'equipment',
        description:
          'Bench presses are an exercise that can be used to tone the muscles of the upper body, including the pectorals, arms, and shoulders. They also can be an effective strengthening exercise for sports like sprinting, hockey, and football.'
      },
      {
        name: 'Push up',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 0,
        type: 'bodyweight',
        description:
          'There is no limit to how many push-ups one can do in a day. Many people do more than 300 push-ups a day. But for an average person, even 50 to 100 push-ups should be enough to maintain a good upper body, provided it is done properly. You can start with 20 push-ups, but do not stick to this number.'
      },
      {
        name: 'Dips',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description:
          'Wherever and however you dip, the key is arm position. Your hands should be shoulder-width apart on the surface you are dipping from, with your arms straight. Squeeze your core and glutes then raise your chin and chest to keep your body tight. From there, start the move by bending your elbows. Dip down until your arms are at a 90-degree angle.'
      },
      {
        name: 'Incline bench press',
        muscle_group: 'ch',
        image:
          'https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 95,
        type: 'equipment',
        description: `When the bench is set at an incline (15 to 30 degrees), you activate your shoulders more since it's comparable to a shoulder press. Also, because of the angle of the bench, this exercise puts less stress on your rotator cuff, which is a common area for injury when using the flat bench.`
      },
      {
        name: 'Cable Rope Tricep Pushdown',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 60,
        type: 'equipment',
        description: `With your feet shoulder width apart, face a pulley machine with an attached rope, v-bar, or solid straight bar hanging at chest height.`
      },
      {
        name: 'Overhead extension',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: 1,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment',
        description: `The overhead triceps extension is the fourth most effective triceps exercise, coming in at about 76% of muscle activation. 1 The key to this exercise is to keep the arms next to the ears as you lower the weight behind you. Make sure you can contract the abs to keep your back from arching.`
      },
      {
        name: 'Bench dip',
        muscle_group: 'tr',
        image: 'https://www.burnthefatinnercircle.com/members/images/1870.jpg',
        workout_id: 1,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description: `Bench dips can strengthen muscles in your triceps, chest, and shoulders. They’re also simple to scale. Whether you want to ease some pressure or take on more of a challenge, bench dips are a versatile move to add to your routine.`
      },
      {
        name: 'Barbell deadlift',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 5,
        weight: 155,
        type: 'equipment',
        description: `If you’re at an advanced fitness level, you’ll need a heavy amount of weight to benefit from deadlifts. If that is the case, perform 1 to 6 deadlifts per set, and perform 3 to 5 sets, resting in between.
        If you are new to deadlifts and focusing on getting the correct form down with a lower weight, perform 5 to 8 deadlifts per set. Work your way up to 3 to 5 sets.        `
      },
      {
        name: 'Kettlebell deadlift',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 52,
        type: 'equipment',
        description: `
        These kettlebell deadlifts are one of the greatest compound exercises for the strengthening of glutes, hamstrings, quadriceps, and muscles of the lower as well as upper body. ... Kettlebells improve the overall strength of the body and improve the coordination, balance and flexibility of the body.`
      },
      {
        name: 'Lying tricep extension',
        muscle_group: 'tr',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 60,
        type: 'equipment',
        description: `
        Training triceps is a must if you want big arms because tri's are two-thirds of the upper arm. The lying triceps extension is also known as the skull crusher so be careful. The lying triceps extension is a good movement to hit all three heads of the triceps`
      },
      {
        name: 'Pull up',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadlift-workout-for-back-royalty-free-image-527680187-1553003041.jpg?crop=1.00xw:0.752xh;0,0.0793xh&resize=1200:*',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 7,
        weight: 0,
        type: 'equipment',
        description: `Leap up and grip the bar with your hands shoulder width apart and your palms facing away from you. Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground.
        Keep your shoulders back and your core engaged throughout. Then pull up. Focus on enlisting every upper body muscle to aid your upward endeavours.`
      },
      {
        name: 'Lat pulldown',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 40,
        type: 'equipment',
        description: `The lat pulldown is a fantastic exercise to strengthen the latissimus dorsi muscle, the broadest muscle in your back, which promotes good postures and spinal stability. Form is crucial when performing a lat pulldown to prevent injury and reap the best results.`
      },
      {
        name: 'Bent-Over row',
        muscle_group: 'bk',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 45,
        type: 'equipment',
        description: `The bent over row is a multi-jointed exercise that recruits several different muscles. It improves strength in the upper and lower back, glutes, hamstrings, lats, and shoulders.`
      },
      {
        name: 'Hammer curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 30,
        type: 'equipment',
        description: `Hammer curls target the long head of the bicep as well as the brachialis (another muscle in the upper arm) and the brachioradialis (one of the key forearm muscles). The hammer curl is a relatively simple exercise that beginners can quickly master.`
      },
      {
        name: 'Chin-up',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 4,
        reps: 5,
        weight: 0,
        description: `Generally, lifters will find that the chinup is easier than the pullup. The reasoning for this is that with higher biceps brachii activity, the shoulder-arm-forearm complex can be utilized slightly better than in the pullup.`
      },
      {
        name: 'Barbell curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 35,
        type: 'equipment',
        description: `The barbell curl targets your biceps brachii muscle as well as the brachialis, a muscle responsible for elbow flexion. With regular practice, barbell curls can help you build bigger biceps. Barbell curls generally allow you to lift heavier weight than dumbbell curls. Barbell curls improve your grip strength.`
      },
      {
        name: 'Cable curl',
        muscle_group: 'bc',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bicep-curls-1556108522.jpg',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 50,
        type: 'equipment',
        description: `The cable curl primarily works the biceps brachii, which is the two-headed muscle on the front of your arm that merges into one muscle belly near the elbow. The exercise also engages the brachialis, which lies beneath the biceps muscle, plus the forearms and the deltoids in the shoulders.`
      },
      {
        name: 'Crunch',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description: `The crunch is a classic core exercise. It specifically trains your abdominal muscles, which are part of your core. ... It also includes your oblique muscles on the sides of your trunk, as well as the muscles in your pelvis, lower back, and hips. Together, these muscles help stabilize your body.`
      },
      {
        name: 'Russian twist',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight',
        description: `
        Image result for russian twist
        The Russian twist is an effective way to build your core and shoulders. It's a popular exercise among athletes since it helps with rotational movement, which happens often in sports. It may look like a simple movement, but it requires a lot of strength and support.`
      },
      {
        name: 'Bicycle crunches',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight',
        description: `The bicycle crunch is an effective ab exercise, reaching not only the usual abs but also the deep abs and the obliques. 1 If you want to work your core, this air bicycle maneuver is a great choice.`
      },
      {
        name: 'Leg raise',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 0,
        type: 'bodyweight',
        description: `
        Besides working the lower abs and inner thighs, leg lifts also help with hip strength and flexibility due to the motion of your legs and hips during the move. Plus, the move gets your low back involved, which is beneficial for anyone who is interested in strengthening the full core region.`
      },
      {
        name: 'Plank',
        muscle_group: 'ab',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        time: 30,
        type: 'bodyweight',
        description: `Planks recruit your entire body to create tension of the core — when done right, they can be really good for keeping your back healthy and strengthening your core muscles.`
      },
      {
        name: 'Dumbbell overhead press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment',
        description: `
        Dumbbell overhead presses work the delts in your shoulders—particularly the medial and anterior deltoids, increasing your shoulder mobility and size. Dumbbell overhead presses can increase your core strength and stability. Core activation is an essential part of the dumbbell overhead press.`
      },
      {
        name: 'Military press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 70,
        type: 'equipment',
        description: `A military press, also known as an overhead press and a shoulder press, is a barbell strength training exercise that works muscle groups in the upper body like the triceps in your arms, the trapezius muscles in your upper back, and the deltoid muscles in your shoulders, including the anterior and medial delts.`
      },
      {
        name: 'Bottoms-Up kettlebell press',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 25,
        type: 'equipment',
        description: `The bottoms-up press requires the bell to stay held vertically overhead, demanding a vertical forearm and a smooth path up, led by a strong and stable shoulder. Because of this, the bottoms-up kettlebell press is one of the easiest ways to learn and teach superb pressing mechanics.`
      },
      {
        name: 'Lateral raise',
        muscle_group: 'sh',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 12,
        weight: 20,
        type: 'equipment',
        description: `A lateral raise works your shoulder muscles as well as your triceps. To do this exercise: Stand or sit with your arms at your sides and a dumbbell in each hand`
      },
      ,
      {
        name: 'Heavy squats',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 70,
        type: 'equipment',
        description: `Warm up to about 90% of your max but don't squat this weight. Unrack it and hold it for 10 seconds then put it back down. Continue to add 5-10% for each set and up to 20% over your 1RM. ... It stimulates your nervous system and makes you feel more comfortable with heavy weight on your back.`
      },
      ,
      {
        name: 'Bodyweight squat',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 4,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description: `Body squats are good for warming up the body and raising your core temperature. They are a good way to start your exercise routine. Performed regularly these exercises can help you begin toning your glutes and quads. Body squats are also beneficial because they are a gateway exercise.`
      },
      ,
      {
        name: 'Lunges',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description: `A proper lunge posture can help you achieve a stronger and more stable core. This workout engages your core and abdominal muscles. It helps you build stability which when you move your hips up and down. A stronger core allows you deal with lower back pain and improves your balance and posture as well.`
      },
      ,
      {
        name: 'Calf raises',
        muscle_group: 'lg',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 20,
        weight: 0,
        type: 'bodyweight',
        description: `The calf raise is an exercise you can do with dumbbells to work the calf muscles. The calf muscles are located in the back of the lower legs. Strengthening your calf muscles with the calf raise exercise will help protect your Achilles tendon and calf from injury.`
      },
      {
        name: 'Kettlebell swings',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 10,
        weight: 25,
        type: 'equipment',
        description: `This kettlebell exercise targets the abs, shoulders, pecs, glutes, quads, hips, hamstrings, and lats with a simple motion. Swinging the kettlebell can also have benefits on grip strength.`
      },
      {
        name: 'Burpees',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 10,
        weight: 0,
        type: 'bodyweight',
        description: `Burpees get your whole body working and aim to build strength and endurance in your lower and upper body. When performed correctly, burpees should work the muscles in your legs, hips, abdomen, arms, chest, buttocks and shoulders.`
      },
      {
        name: 'Jump lunges',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 3,
        reps: 8,
        weight: 0,
        type: 'bodyweight',
        description: `
        Jumping lunges are a fantastic lower body exercise that increases the intensity and difficulty of the basic lunge by adding a jump. The addition of a plyometric jump not only challenges the quads, hamstrings, glutes, hip flexors, and calves, but it also recruits your cardiovascular system.`
      },
      {
        name: 'Box jumps',
        muscle_group: 'fb',
        image: 'img',
        workout_id: null,
        user_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        sets: 5,
        reps: 5,
        weight: 0,
        type: 'equipment',
        description: `
        Image result for box jumps
        Explosive strength , speed strength , and vertical jumping power are the primary areas you train. In box jump training you work all of your leg muscles and strengthen your core using your own body weight. Box jumps also boost endurance and improve your cardiovascular health.`
      }
    ];
    await queryInterface.bulkInsert('exercises', exercises);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', exercises);
  }
};
